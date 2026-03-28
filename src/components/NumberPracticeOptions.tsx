import { Radio, Title, Group } from "@mantine/core";
import React from "react";
import { NumberPracticeConfiguration } from "./NumberPractice";

export interface NumberPracticeOptionsProps {
  options: NumberPracticeConfiguration;
  onChange: (options: NumberPracticeConfiguration) => void;
}

function NumberPracticeOptions({ options, onChange }: NumberPracticeOptionsProps) {
  return (
    <>
      <Title order={6} mb="sm" pt="md">
        Numbers
      </Title>
      <Radio.Group
        name="practiceType"
        label="What do you want to practice?"
        value={options.practice_type}
        withAsterisk
        onChange={(e) =>
          onChange({
            ...options,
            practice_type: e.valueOf() as "kana_to_romaji" | "kana_to_digits" | "digits_to_romaji",
          })
        }
      >
        <Group mt="xs">
          <Radio value="kana_to_romaji" label="Kana to Romaji" />
          <Radio value="kana_to_digits" label="Kana to Digits" />
          <Radio value="digits_to_romaji" label="Digits to Romaji" />
        </Group>
      </Radio.Group>
    </>
  );
}

export default NumberPracticeOptions;
