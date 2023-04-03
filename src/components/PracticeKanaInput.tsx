import { Container, Group, Stack, Text, TextInput, Tooltip } from "@mantine/core";
import React, { ChangeEventHandler, KeyboardEventHandler, useState } from "react";
import { kanaMap } from "../utilities/kana";

const kanaInputId = "kana-input";

const stringifyRomaji = (romaji: string | string[]) => (Array.isArray(romaji) ? romaji.join(" / ") : romaji);

const romajiSet = new Set(
  Object.values(kanaMap)
    .flat()
    .filter((val) => val !== "n"),
);

export interface PracticeKanaInputProps {
  kana: { kana: string; romaji: string | string[] };
  onAnswer: (correct: boolean) => void;
}

function PracticeKanaInput({ kana: { kana, romaji }, onAnswer }: PracticeKanaInputProps) {
  const [kanaInputValue, setKanaInputValue] = useState("");

  const checkKanaInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value.toLowerCase();
    if (value === romaji || (Array.isArray(romaji) && romaji.some((romaji) => romaji === value))) {
      onAnswer(true);
    } else if (romajiSet.has(value)) {
      onAnswer(false);
    } else {
      setKanaInputValue(value);
    }
  };

  const skip: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      onAnswer(false);
      setKanaInputValue("");
    }
  };

  return (
    <Container>
      <Stack align="center">
        <Tooltip label={stringifyRomaji(romaji)} withArrow>
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
          })}
          maxLength={5}
          value={kanaInputValue}
          onChange={checkKanaInput}
          onKeyDown={skip}
        />
      </Group>
    </Container>
  );
}

PracticeKanaInput.kanaInputId = kanaInputId;

export default PracticeKanaInput;
