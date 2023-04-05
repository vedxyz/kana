import { Checkbox, Title } from "@mantine/core";
import React from "react";
import { KanaNames } from "../utilities/kana";
import { words } from "../utilities/words";
import { WordPracticeConfiguration } from "./WordPractice";

export interface WordPracticeOptionsProps {
  options: WordPracticeConfiguration;
  onChange: (options: WordPracticeConfiguration) => void;
}

function WordPracticeOptions({ options, onChange }: WordPracticeOptionsProps) {
  const buildCheckbox = (kanaType: KanaNames) => (
    <Checkbox
      label={`Include ${words[kanaType].length} ${kanaType} words`}
      checked={options[kanaType]}
      onChange={(e) => onChange({ ...options, [kanaType]: e.currentTarget.checked })}
      mb="xs"
    />
  );

  return (
    <>
      <Title order={6} mb="sm" pt="md">
        Kana
      </Title>
      {buildCheckbox("hiragana")}
      {buildCheckbox("katakana")}
    </>
  );
}

export default WordPracticeOptions;
