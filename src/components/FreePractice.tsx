import { Container, Group, Text, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useRef, useState } from "react";
import {
  getBaseKanaConfiguration,
  getDefaultRomaji,
  KanaConfiguration,
  kanaConfigurationToMap,
  kanaMapToArray,
  spacedRepetitionStream,
} from "../utilities/kana";
import FreePracticeOptions from "./FreePracticeOptions";
import PlayKanaSoundButton from "./PlayKanaSoundButton";
import { MiscPracticeOptions } from "./PracticeCard";
import PracticeKanaInput from "./PracticeKanaInput";
import PracticeOptions from "./PracticeOptions";

const buildSpacedRepetitionStream = (config: KanaConfiguration) => {
  return spacedRepetitionStream(kanaMapToArray(kanaConfigurationToMap(config)));
};

function FreePractice() {
  const [openedOptions, { toggle: toggleOptions }] = useDisclosure(true);

  const [stats, setStats] = useState({ correctCount: 0, totalCount: 0 });

  const [options, setOptions] = useState(getBaseKanaConfiguration(true));
  const [miscOptions, setMiscOptions] = useState<MiscPracticeOptions>({ showCorrectAnswer: true });

  const streamRef = useRef(buildSpacedRepetitionStream(options));

  const [currentKana, setCurrentKana] = useState(streamRef.current.current());

  const onAnswer = (correct: boolean) => {
    setStats((prev) => ({
      correctCount: correct ? prev.correctCount + 1 : prev.correctCount,
      totalCount: prev.totalCount + 1,
    }));

    if (!correct) {
      streamRef.current.onFail();
    }
    streamRef.current.next();

    setCurrentKana(streamRef.current.current());
  };

  const handleOptionsChange = (newOptions: typeof options) => {
    if (Object.values(newOptions).every((o) => !Object.values(o).includes(true)))
      newOptions.hiragana.regular_vowel = true;
    setOptions(newOptions);

    streamRef.current = buildSpacedRepetitionStream(newOptions);
    setCurrentKana(streamRef.current.current());
  };

  const handleMiscOptionsChange = (newOptions: typeof miscOptions) => {
    setMiscOptions(newOptions);
  };

  return (
    <Container px={0}>
      <PracticeKanaInput kana={currentKana} onAnswer={onAnswer} showCorrectAnswer={miscOptions.showCorrectAnswer} />

      <Group mt="md" position="apart" align="end">
        <Group>
          <PlayKanaSoundButton key={getDefaultRomaji(currentKana.romaji)} romaji={currentKana.romaji} />
          <PracticeOptions.CollapseButton opened={openedOptions} onClick={toggleOptions} />
          <Text c="dimmed" fz="xs" opacity={0.35}>
            Hover over kana to reveal answer
          </Text>
        </Group>
        <Group>
          <Tooltip label="Correct / Total" withArrow>
            <Text c="dimmed" fz="sm">{`${stats.correctCount} / ${stats.totalCount}`}</Text>
          </Tooltip>
        </Group>
      </Group>

      <PracticeOptions opened={openedOptions}>
        <FreePracticeOptions
          options={options}
          miscOptions={miscOptions}
          onChange={handleOptionsChange}
          onMiscChange={handleMiscOptionsChange}
        />
      </PracticeOptions>
    </Container>
  );
}

export default FreePractice;
