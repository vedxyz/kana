import { Button, ButtonProps, Container, Group, Text, Title } from "@mantine/core";
import React, { useState } from "react";
import { KanaNames } from "../utilities/kana";
import BruteForcePractice from "./BruteForcePractice";

function BruteForceMenu() {
  const buttonProps: ButtonProps = {
    variant: "light",
    fullWidth: true,
    styles: {
      label: { display: "block", textAlign: "center", padding: "0.8rem" },
      root: { height: "unset", flex: "1" },
    },
  };

  const [kanaType, setKanaType] = useState<KanaNames | null>(null);

  if (kanaType) return <BruteForcePractice kanaType={kanaType} />;

  return (
    <Container px={0}>
      <Text>
        You should learn{" "}
        <Text span italic>
          hiragana
        </Text>{" "}
        first.
      </Text>

      <Group mt="sm">
        <Button {...buttonProps} onClick={() => setKanaType("hiragana")}>
          <Title order={3}>Hiragana</Title>
          <Text weight="normal">ひらがな</Text>
        </Button>
        <Button {...buttonProps} onClick={() => setKanaType("katakana")}>
          <Title order={3}>Katakana</Title>
          <Text weight="normal">カタカナ</Text>
        </Button>
      </Group>
    </Container>
  );
}

export default BruteForceMenu;
