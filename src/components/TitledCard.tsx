import { ActionIcon, Collapse, Container, Group, Title, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import React from "react";

export interface TitledCardProps {
  title: string;
  titleOrder?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  collapsible?: boolean;
}

function TitledCard({ title, titleOrder = 1, children, collapsible = false }: TitledCardProps) {
  const [opened, { toggle }] = useDisclosure(true);
  const opacity = opened ? 1 : 0.5;

  return (
    <Container size="sm" px={0} my="xl" bg="dark.6">
      <Group position="apart" align="center" p="sm" bg="dark.8">
        <Title order={titleOrder} italic opacity={opacity}>
          {title}
        </Title>
        {collapsible && (
          <Tooltip label="Show/Hide" withArrow>
            <ActionIcon variant="light" onClick={toggle}>
              <IconLayoutNavbarCollapse size={32} opacity={opacity} />
            </ActionIcon>
          </Tooltip>
        )}
      </Group>
      <Collapse in={opened}>
        <Container p="sm">{children}</Container>
      </Collapse>
    </Container>
  );
}

export default TitledCard;
