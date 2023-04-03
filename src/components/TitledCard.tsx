import { ActionIcon, Collapse, Container, Group, Title } from "@mantine/core";
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

  return (
    <Container size="sm" px={0} my="xl" bg="dark.6">
      <Group position="apart" align="center" p="sm" bg="dark.8">
        <Title order={titleOrder} italic>
          {title}
        </Title>
        {collapsible && (
          <ActionIcon variant="light" onClick={toggle} title="Show/Hide">
            <IconLayoutNavbarCollapse size={32} />
          </ActionIcon>
        )}
      </Group>
      <Collapse in={opened}>
        <Container p="sm">{children}</Container>
      </Collapse>
    </Container>
  );
}

export default TitledCard;
