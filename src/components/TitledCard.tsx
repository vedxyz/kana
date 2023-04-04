import { ActionIcon, Collapse, Container, Group, Title, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import React, { useEffect } from "react";

export interface TitledCardProps {
  title: string;
  titleOrder?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  collapsible?: boolean;
  titleActionElement?: JSX.Element;
}

const getStorageKeyForCollapse = (title: string) => `TitledCard-${title}-collapsed`;
const getStoredStateForCollapse = (title: string): boolean => {
  const stateString = window.localStorage.getItem(getStorageKeyForCollapse(title));
  if (stateString === null) return false;
  return JSON.parse(stateString);
};

function TitledCard({ title, titleOrder = 1, children, collapsible = false, titleActionElement }: TitledCardProps) {
  const [opened, { toggle }] = useDisclosure(collapsible ? !getStoredStateForCollapse(title) : true);
  const opacity = opened ? 1 : 0.5;

  useEffect(() => {
    if (collapsible && title.length > 0) {
      window.localStorage.setItem(getStorageKeyForCollapse(title), JSON.stringify(!opened));
    }
  }, [opened]);

  return (
    <Container size="sm" px={0} my="xl" bg="dark.6">
      <Group position="apart" align="center" p="sm" bg="dark.8">
        <Title order={titleOrder} italic opacity={opacity}>
          {title}
        </Title>
        <Group>
          {titleActionElement}
          {collapsible && (
            <Tooltip label="Show/Hide" withArrow>
              <ActionIcon variant="light" onClick={toggle}>
                <IconLayoutNavbarCollapse size={32} opacity={opacity} />
              </ActionIcon>
            </Tooltip>
          )}
        </Group>
      </Group>
      <Collapse in={opened}>
        <Container p="sm">{children}</Container>
      </Collapse>
    </Container>
  );
}

export default TitledCard;
