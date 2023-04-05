import { Button, Container, Group, Text, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useRef, useState } from "react";
import { KanaNames, shuffledStream } from "../utilities/kana";
import { tooltipProps } from "../utilities/tooltip";
import { words } from "../utilities/words";
import PracticeKanaInput from "./PracticeKanaInput";
import PracticeOptions from "./PracticeOptions";
import WordPracticeOptions from "./WordPracticeOptions";

export interface WordPracticeConfiguration {
  hiragana: boolean;
  katakana: boolean;
}

const buildShuffledStream = (options: WordPracticeConfiguration) => {
  const shuffledWords: string[] = [];

  Object.entries(options).forEach(([kanaType, enabled]) => {
    if (enabled) shuffledWords.push(...words[kanaType as KanaNames]);
  });

  return shuffledStream(shuffledWords);
};

function WordPractice() {
  const [openedOptions, { toggle: toggleOptions }] = useDisclosure(true);

  const [stats, setStats] = useState({ correctCount: 0, totalCount: 0 });

  const [options, setOptions] = useState<WordPracticeConfiguration>({ hiragana: true, katakana: false });

  const streamRef = useRef(buildShuffledStream(options));

  const [currentKana, setCurrentKana] = useState(words.toKanaObject(streamRef.current.current()));
  const [previousKana, setPreviousKana] = useState<typeof currentKana | null>(null);

  const onAnswer = (correct: boolean) => {
    setStats((prev) => ({
      correctCount: correct ? prev.correctCount + 1 : prev.correctCount,
      totalCount: prev.totalCount + 1,
    }));

    streamRef.current.next();

    setPreviousKana(currentKana);
    setCurrentKana(words.toKanaObject(streamRef.current.current()));
  };

  const handleOptionsChange = (newOptions: typeof options) => {
    if (!Object.values(newOptions).includes(true)) newOptions.hiragana = true;
    setOptions(newOptions);

    streamRef.current = buildShuffledStream(newOptions);

    setCurrentKana(words.toKanaObject(streamRef.current.current()));
  };

  return (
    <Container px={0}>
      <PracticeKanaInput wordMode kana={currentKana} onAnswer={onAnswer} showCorrectAnswer={false} />

      {previousKana && (
        <Text c="dimmed" fz="xs" mt="2.5rem">
          previous: {previousKana.kana} = {previousKana.romaji}
        </Text>
      )}

      <Group mt="md" position="apart" align="end">
        <Group>
          <Button
            variant="subtle"
            size="sm"
            component="a"
            href={`https://jisho.org/search/${currentKana.kana}`}
            target="_blank"
          >
            Search Jisho
          </Button>
          <PracticeOptions.CollapseButton opened={openedOptions} onClick={toggleOptions} />
          <Text c="dimmed" fz="xs" opacity={0.35}>
            Hover over kana to reveal answer
          </Text>
        </Group>
        <Group>
          <Tooltip {...tooltipProps} label="Correct / Total">
            <Text c="dimmed" fz="sm">{`${stats.correctCount} / ${stats.totalCount}`}</Text>
          </Tooltip>
        </Group>
      </Group>

      <PracticeOptions opened={openedOptions}>
        <WordPracticeOptions options={options} onChange={handleOptionsChange} />
      </PracticeOptions>
    </Container>
  );
}

export default WordPractice;
