import { Container, Group, Stack, Text, TextInput, Tooltip } from "@mantine/core";
import React, { ChangeEventHandler, KeyboardEventHandler, useState } from "react";
import { kanaMap, stringifyRomaji } from "../utilities/kana";

const kanaInputId = "kana-input";

const romajiSet = new Set(
  Object.values(kanaMap)
    .flat()
    .filter((val) => val !== "n"),
);

export interface PracticeKanaInputProps {
  kana: { kana: string; romaji: string | string[] };
  showAnswer?: boolean;
  onAnswer: (correct: boolean) => void;
  showCorrectAnswer: boolean;
}

function PracticeKanaInput({
  kana: { kana, romaji },
  showAnswer,
  onAnswer,
  showCorrectAnswer,
}: PracticeKanaInputProps) {
  const [kanaInputValue, setKanaInputValue] = useState("");
  const [gaveIncorrectAnswer, setGaveIncorrectAnswer] = useState(false);

  const resetState = () => {
    setKanaInputValue("");
    setGaveIncorrectAnswer(false);
  };

  const checkKanaInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value.toLowerCase();

    if (value === romaji || (Array.isArray(romaji) && romaji.some((romaji) => romaji === value))) {
      resetState();
      onAnswer(!gaveIncorrectAnswer);
    } else {
      if (romajiSet.has(value)) {
        setGaveIncorrectAnswer(true);
      }
      setKanaInputValue(value);
    }
  };

  const skip: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      resetState();
      onAnswer(false);
    }
  };

  return (
    <Container>
      <Stack align="center">
        <Tooltip label={stringifyRomaji(romaji)} withArrow opened={showAnswer}>
          <Text size="3.75rem">{kana}</Text>
        </Tooltip>
      </Stack>
      <Group position="center">
        <TextInput
          id={kanaInputId}
          w="6rem"
          styles={() => ({
            input: {
              textAlign: "center",
            },
            error: {
              textAlign: "center",
            },
          })}
          maxLength={5}
          placeholder="romaji"
          value={kanaInputValue}
          error={gaveIncorrectAnswer ? (showCorrectAnswer ? `${kana} = ${stringifyRomaji(romaji)}` : true) : false}
          onChange={checkKanaInput}
          onKeyDown={skip}
        />
      </Group>
    </Container>
  );
}

PracticeKanaInput.kanaInputId = kanaInputId;

export default PracticeKanaInput;