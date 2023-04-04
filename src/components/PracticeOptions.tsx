import { Button, Collapse, Container, Divider } from "@mantine/core";
import React from "react";

export interface PracticeOptionsProps {
  children: React.ReactNode;
  opened: boolean;
}

function PracticeOptions({ children, opened }: PracticeOptionsProps) {
  return (
    <Collapse in={opened}>
      <Container px={0} pt="md">
        <Divider />

        {children}
      </Container>
    </Collapse>
  );
}

export interface PracticeOptionsCollapseButtonProps {
  opened: boolean;
  onClick: () => void;
}

function PracticeOptionsCollapseButton({ opened, onClick }: PracticeOptionsCollapseButtonProps) {
  return (
    <Button variant="subtle" size="sm" onClick={onClick}>
      {opened ? "Hide" : "Show"} Options
    </Button>
  );
}

PracticeOptions.CollapseButton = PracticeOptionsCollapseButton;

export default PracticeOptions;
