import { ActionIcon, Button, ButtonProps, Container, Group, List, Text, Title, Tooltip } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";
import { bruteForce, BruteForceProgress } from "../utilities/bruteforce";
import { KanaNames } from "../utilities/kana";
import { tooltipProps } from "../utilities/tooltip";
import BruteForcePractice from "./BruteForcePractice";

function formatProgress(progress: BruteForceProgress): string {
  const phase = progress.learning ? "Learning" : "Reviewing";
  return `${phase} ${progress.stageName}`;
}

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
  const [savedProgress, setSavedProgress] = useState<{
    hiragana: BruteForceProgress | null;
    katakana: BruteForceProgress | null;
  }>({
    hiragana: bruteForce.loadProgress("hiragana"),
    katakana: bruteForce.loadProgress("katakana"),
  });

  if (kanaType) return <BruteForcePractice kanaType={kanaType} initialProgress={savedProgress[kanaType]} />;

  const handleClearProgress = (type: KanaNames, e: React.MouseEvent) => {
    e.stopPropagation();
    bruteForce.clearProgress(type);
    setSavedProgress((prev) => ({ ...prev, [type]: null }));
  };

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
          {savedProgress.hiragana && (
            <Group spacing={4} mt={4} position="center" noWrap>
              <Text weight="normal" fz="xs" c="dimmed">
                Resume: {formatProgress(savedProgress.hiragana)}
              </Text>
              <Tooltip {...tooltipProps} label="Clear saved progress">
                <ActionIcon size="xs" variant="subtle" onClick={(e) => handleClearProgress("hiragana", e)}>
                  <IconTrash size={12} />
                </ActionIcon>
              </Tooltip>
            </Group>
          )}
        </Button>
        <Button {...buttonProps} onClick={() => setKanaType("katakana")}>
          <Title order={3}>Katakana</Title>
          <Text weight="normal">カタカナ</Text>
          {savedProgress.katakana && (
            <Group spacing={4} mt={4} position="center" noWrap>
              <Text weight="normal" fz="xs" c="dimmed">
                Resume: {formatProgress(savedProgress.katakana)}
              </Text>
              <Tooltip {...tooltipProps} label="Clear saved progress">
                <ActionIcon size="xs" variant="subtle" onClick={(e) => handleClearProgress("katakana", e)}>
                  <IconTrash size={12} />
                </ActionIcon>
              </Tooltip>
            </Group>
          )}
        </Button>
      </Group>
    </Container>
  );
}

export default BruteForceMenu;
