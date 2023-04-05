import { Button, ButtonProps, Container, Group, List, Text, Title } from "@mantine/core";
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
        In this mode you will go through learning stages that introduce you to a new set of kana each time. The answer
        for newly encountered kana will be shown automatically, pay extra attention to the shape of these kana. After
        each learning stage, there is a review stage of every kana you have learnt so far. Each stage has a certain
        requirement to clear, as you will see.
      </Text>
      <Title order={4} mt="sm">
        Tips
      </Title>
      <List pr={16}>
        <List.Item>
          Do not feel pressured to move onto the next stage immediately when prompted, gauge yourself.
        </List.Item>
        <List.Item>You can continue from any stage you want within the options menu.</List.Item>
        <List.Item>You should expect to need a total of ~1600 correct answers to clear all stages.</List.Item>
        <List.Item>
          Learning kana here will not necessarily make you able to <Text span>produce</Text> them. The only guarantee is
          that you will be able to recognize kana on sight, which is enough (or at least a good start) for most people.
        </List.Item>
      </List>
      <Text mt="sm">
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
