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
        withAsterisk
        onChange={(e) => onChange({ ...options, practice_type: e.valueOf() as "kana_to_digits" | "kana_to_romaji" | "digits_to_romaji" })}
      >
        <Group mt="xs">
          <Radio value="kana_to_digits" label="Kana -> Digits" />
          <Radio value="kana_to_romaji" label="Kana -> Romaji" />
          <Radio value="digits_to_romaji" label="Digits -> Romaji" />
        </Group>
      </Radio.Group>
    </>
  );
}

export default NumberPracticeOptions;
