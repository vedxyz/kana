import { Container, Group, Text, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useRef, useState } from "react";
import { shuffledStream } from "../utilities/kana";
import { tooltipProps } from "../utilities/tooltip";
import { numbers, JpnNumbersKana, kanaObject } from "../utilities/numbers";
import KanaAnswerTooltipHint from "./KanaAnswerTooltipHint";
import PracticeKanaInput from "./PracticeKanaInput";
import PracticeOptions from "./PracticeOptions";
import NumberPracticeOptions from "./NumberPracticeOptions";

export interface NumberPracticeConfiguration {
  practice_type: 'kana_to_digits' | 'kana_to_romaji' | 'digits_to_romaji';
}

const buildShuffledStream = () => {
  const shuffledNumbers: JpnNumbersKana[] = [];
  shuffledNumbers.push(...(Object.keys(numbers["kana_to_digits"]) as JpnNumbersKana[]))
  return shuffledStream<JpnNumbersKana>(shuffledNumbers);
};

const getKanaObjectForKana = (kana: JpnNumbersKana, options: NumberPracticeConfiguration) => {
  if (options.practice_type == 'kana_to_romaji') {
    return kanaObject(String(kana), numbers.kana_to_romaji[kana]);
  } else if (options.practice_type == 'kana_to_digits') {
    return kanaObject(String(kana), String(numbers.kana_to_digits[kana]));
  } else if (options.practice_type == 'digits_to_romaji') {
    return kanaObject(String(numbers.kana_to_digits[kana]), numbers.kana_to_romaji[kana]);
  }
  console.log("Error: getKanaObjectForKana has no valid options enabled!")
  return kanaObject(String(kana), "no-kana-found");
}

function NumberPractice() {
  const [openedOptions, { toggle: toggleOptions }] = useDisclosure(true);

  const [stats, setStats] = useState({ correctCount: 0, totalCount: 0 });

  const [options, setOptions] = useState<NumberPracticeConfiguration>({ practice_type: 'kana_to_romaji' });

  const streamRef = useRef(buildShuffledStream());

  const [currentKana, setCurrentKana] = useState(getKanaObjectForKana(streamRef.current.current(), options));
  const [previousKana, setPreviousKana] = useState<typeof currentKana | null>(null);

  const onAnswer = (correct: boolean) => {
    setStats((prev) => ({
      correctCount: correct ? prev.correctCount + 1 : prev.correctCount,
      totalCount: prev.totalCount + 1,
    }));

    streamRef.current.next();

    setPreviousKana(currentKana);
    setCurrentKana(getKanaObjectForKana(streamRef.current.current(), options));
  };

  const handleOptionsChange = (newOptions: NumberPracticeConfiguration) => {
    setOptions(newOptions);

    streamRef.current = buildShuffledStream();

    setCurrentKana(getKanaObjectForKana(streamRef.current.current(), newOptions));
  };

  return (
    <Container px={0}>
      <PracticeKanaInput mode="number" kana={currentKana} onAnswer={onAnswer} showCorrectAnswer={false} />

      {previousKana && (
        <Text c="dimmed" fz="xs" mt="2.5rem">
          previous: {previousKana.kana} = {previousKana.romaji}
        </Text>
      )}

      <Group mt="md" position="apart" align="end">
        <Group>
          <PracticeOptions.CollapseButton opened={openedOptions} onClick={toggleOptions} />
          <KanaAnswerTooltipHint />
        </Group>
        <Group>
          <Tooltip {...tooltipProps} label="Correct / Total">
            <Text c="dimmed" fz="sm">{`${stats.correctCount} / ${stats.totalCount}`}</Text>
          </Tooltip>
        </Group>
      </Group>

      <PracticeOptions opened={openedOptions}>
        <NumberPracticeOptions options={options} onChange={handleOptionsChange} />
      </PracticeOptions>
    </Container>
  );
}

export default NumberPractice;
