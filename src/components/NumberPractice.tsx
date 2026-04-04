import { Container, Group, Text, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useRef, useState } from "react";
import { shuffledStream, stringifyRomaji } from "../utilities/kana";
import { tooltipProps } from "../utilities/tooltip";
import { basicDigits, getBasicDigitQuestion, generateCompoundQuestion } from "../utilities/numbers";
import KanaAnswerTooltipHint from "./KanaAnswerTooltipHint";
import PracticeKanaInput from "./PracticeKanaInput";
import PracticeOptions from "./PracticeOptions";
import NumberPracticeOptions from "./NumberPracticeOptions";

export type CompoundRange = 99 | 999 | 9999 | 99999;

export interface NumberPracticeConfiguration {
  phase: "basic" | "compound";
  basicMode: "kanji_to_romaji" | "digits_to_romaji";
  compoundRange: CompoundRange;
}

interface QuestionStream {
  current: () => { kana: string; romaji: string | string[] };
  next: () => { kana: string; romaji: string | string[] };
}

const buildBasicStream = (mode: NumberPracticeConfiguration["basicMode"]): QuestionStream => {
  const stream = shuffledStream(basicDigits);
  return {
    current: () => getBasicDigitQuestion(stream.current(), mode),
    next: () => {
      stream.next();
      return getBasicDigitQuestion(stream.current(), mode);
    },
  };
};

const buildCompoundStream = (range: CompoundRange): QuestionStream => {
  let currentQuestion = generateCompoundQuestion(range);
  return {
    current: () => currentQuestion,
    next: () => {
      currentQuestion = generateCompoundQuestion(range);
      return currentQuestion;
    },
  };
};

const buildStream = (options: NumberPracticeConfiguration): QuestionStream => {
  if (options.phase === "basic") return buildBasicStream(options.basicMode);
  return buildCompoundStream(options.compoundRange);
};

const defaultOptions: NumberPracticeConfiguration = {
  phase: "basic",
  basicMode: "kanji_to_romaji",
  compoundRange: 99,
};

function NumberPractice() {
  const [openedOptions, { toggle: toggleOptions }] = useDisclosure(true);

  const [stats, setStats] = useState({ correctCount: 0, totalCount: 0 });

  const [options, setOptions] = useState<NumberPracticeConfiguration>(defaultOptions);

  const streamRef = useRef(buildStream(options));

  const [currentQuestion, setCurrentQuestion] = useState(streamRef.current.current());
  const [previousQuestion, setPreviousQuestion] = useState<typeof currentQuestion | null>(null);

  const onAnswer = (correct: boolean) => {
    setStats((prev) => ({
      correctCount: correct ? prev.correctCount + 1 : prev.correctCount,
      totalCount: prev.totalCount + 1,
    }));

    streamRef.current.next();

    setPreviousQuestion(currentQuestion);
    setCurrentQuestion(streamRef.current.current());
  };

  const handleOptionsChange = (newOptions: NumberPracticeConfiguration) => {
    setOptions(newOptions);

    streamRef.current = buildStream(newOptions);

    setCurrentQuestion(streamRef.current.current());
  };

  return (
    <Container px={0}>
      <PracticeKanaInput
        mode="number"
        kana={currentQuestion}
        onAnswer={onAnswer}
        showCorrectAnswer={false}
        placeholder={options.phase === "compound" ? "number" : "romaji"}
        fontSize={options.phase === "compound" ? "2rem" : undefined}
      />

      {previousQuestion && (
        <Text c="dimmed" fz="xs" mt="2.5rem">
          previous: {previousQuestion.kana} = {stringifyRomaji(previousQuestion.romaji)}
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
