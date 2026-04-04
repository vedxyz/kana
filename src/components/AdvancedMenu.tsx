import React from "react";
import { Button, ButtonProps, Container, Text, Title } from "@mantine/core";
import { PracticeCardPages } from "./PracticeCard";

export interface AdvancedMenuProps {
  onPageChange: (newPage: PracticeCardPages) => void;
}

function AdvancedMenu({ onPageChange }: AdvancedMenuProps) {
  const buttonProps: ButtonProps = {
    variant: "light",
    fullWidth: true,
    styles: {
      label: { display: "block", textAlign: "center", padding: "0.8rem", whiteSpace: "normal" },
      root: { height: "unset" },
    },
  };

  return (
    <Container px={0}>
      <Button {...buttonProps} onClick={() => onPageChange("number")}>
        <Title order={3}>Number Mode</Title>
        <Text weight="normal">Practice reading Japanese numbers and parsing compound numbers</Text>
      </Button>
    </Container>
  );
}

export default AdvancedMenu;
