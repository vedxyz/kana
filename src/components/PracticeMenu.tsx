import React from "react";
import { Button, ButtonProps, Container, Text, Title } from "@mantine/core";
import { PracticeCardPages } from "./PracticeCard";

export interface PracticeMenuProps {
  onPageChange: (newPage: PracticeCardPages) => void;
}

function PracticeMenu({ onPageChange }: PracticeMenuProps) {
  const buttonProps: ButtonProps = {
    variant: "light",
    fullWidth: true,
    styles: {
      label: { display: "block", textAlign: "center", padding: "0.8rem" },
      root: { height: "unset" },
    },
  };

  return (
    <Container px={0}>
      <Button {...buttonProps} onClick={() => onPageChange("bruteforce")}>
        <Title order={3}>Brute Force Mode</Title>
        <Text weight="normal">Follow a structured route to learn kana from zero, one row at a time</Text>
      </Button>
      <Button {...buttonProps} mt="sm" onClick={() => onPageChange("free")}>
        <Title order={3}>Free Mode</Title>
        <Text weight="normal">Practice by yourself with whichever kana and options you prefer</Text>
      </Button>
      <Button {...buttonProps} mt="sm" onClick={() => onPageChange("word")}>
        <Title order={3}>Word Mode</Title>
        <Text weight="normal">Practice kana chaining with words from N5/N4 decks</Text>
      </Button>
    </Container>
  );
}

export default PracticeMenu;
