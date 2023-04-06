import { Container, Group, Stack, Text, TextInput, Tooltip } from "@mantine/core";
import React, { ChangeEventHandler, KeyboardEventHandler, useState } from "react";
import { kanaMap, stringifyRomaji } from "../utilities/kana";
import { tooltipProps } from "../utilities/tooltip";

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
  wordMode?: boolean;
}

function PracticeKanaInput({
  kana: { kana, romaji },
  showAnswer,
  onAnswer,
  showCorrectAnswer,
  wordMode = false,
}: PracticeKanaInputProps) {
  const stringifiedRomaji = stringifyRomaji(romaji);

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

  const checkWordInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value.toLowerCase();

    if (value === romaji) {
      resetState();
      onAnswer(true);
    } else {
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
        <Tooltip {...tooltipProps} key={stringifiedRomaji} label={stringifiedRomaji} opened={showAnswer}>
          <Text size={wordMode ? "1.4rem" : "3.75rem"}>{kana}</Text>
        </Tooltip>
      </Stack>
      <Group position="center">
        <TextInput
          id={kanaInputId}
          w={wordMode ? "14rem" : "6rem"}
          styles={() => ({
            input: {
              textAlign: "center",
            },
            error: {
              textAlign: "center",
            },
          })}
          maxLength={Math.max(5, ...(Array.isArray(romaji) ? romaji.map((r) => r.length) : [romaji.length]))}
          placeholder="romaji"
          value={kanaInputValue}
          error={gaveIncorrectAnswer ? (showCorrectAnswer ? `${kana} = ${stringifiedRomaji}` : true) : false}
          onChange={wordMode ? checkWordInput : checkKanaInput}
          onKeyDown={skip}
        />
      </Group>
    </Container>
  );
}

PracticeKanaInput.kanaInputId = kanaInputId;

export default PracticeKanaInput;
