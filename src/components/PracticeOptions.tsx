import { Checkbox, Container, Divider, Title } from "@mantine/core";
import React from "react";
import KanaBoard from "./KanaBoard";
import { KanaConfiguration, KanaNames } from "../utilities/kana";
import { MiscPracticeOptions } from "./PracticeCard";

export interface PracticeOptionsProps {
  options: KanaConfiguration;
  miscOptions: MiscPracticeOptions;
  onChange: (options: KanaConfiguration) => void;
  onMiscChange: (options: MiscPracticeOptions) => void;
}

function PracticeOptions({ options, miscOptions, onChange, onMiscChange }: PracticeOptionsProps) {
  const makeChangeHandler = (kanaType: KanaNames) => (innerOptions: KanaConfiguration[keyof KanaConfiguration]) =>
    onChange({ ...options, [kanaType]: innerOptions });

  return (
    <Container px={0} pt="md">
      <Divider />

      <Container px={0} py="md">
        <Title order={6} mb="sm">
          General
        </Title>
        <Checkbox
          label="Show correct answer when a wrong answer is given"
          checked={miscOptions.showCorrectAnswer}
          onChange={() => {
            onMiscChange({
              ...miscOptions,
              showCorrectAnswer: !miscOptions.showCorrectAnswer,
            });
          }}
        />
      </Container>

      <Title order={6} mb="sm">
        Kana
      </Title>
      <KanaBoard kanaType="hiragana" options={options.hiragana} onChange={makeChangeHandler("hiragana")} />
      <KanaBoard kanaType="hiragana" options={options.hiragana} onChange={makeChangeHandler("hiragana")} combinations />
      <KanaBoard kanaType="katakana" options={options.katakana} onChange={makeChangeHandler("katakana")} />
      <KanaBoard kanaType="katakana" options={options.katakana} onChange={makeChangeHandler("katakana")} combinations />
    </Container>
  );
}

export default PracticeOptions;
