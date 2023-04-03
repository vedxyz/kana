import { Button, Collapse, Group, Text, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useRef, useState } from "react";
import {
  getBaseKanaConfiguration,
  KanaConfiguration,
  kanaConfigurationToMap,
  kanaMapToArray,
  spacedRepetitionStream,
} from "../utilities/kana";
import PracticeKanaInput from "./PracticeKanaInput";
import PracticeOptions from "./PracticeOptions";
import TitledCard from "./TitledCard";

const kanaAudioSource = {
  djtguide: "https://djtguide.neocities.org/kana/audio", // [romaji].mp3
  itazuraneko: "https://itazuraneko.neocities.org/learn/kana/audio", // [romaji].mp3
};

const buildSpacedRepetitionStream = (config: KanaConfiguration) => {
  return spacedRepetitionStream(kanaMapToArray(kanaConfigurationToMap(config)));
};

export interface MiscPracticeOptions {
  showCorrectAnswer: boolean;
}

function PracticeCard() {
  const [openedOptions, { toggle: toggleOptions }] = useDisclosure(false);

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

    streamRef.current = spacedRepetitionStream(kanaMapToArray(kanaConfigurationToMap(newOptions)));
    setCurrentKana(streamRef.current.current());
  };

  const handleMiscOptionsChange = (newOptions: typeof miscOptions) => {
    setMiscOptions(newOptions);
  };

  return (
    <TitledCard title="Practice" titleOrder={3}>
      <PracticeKanaInput
        key={`${currentKana.kana}-${currentKana.romaji}-${stats.totalCount}`}
        kana={currentKana}
        onAnswer={onAnswer}
        showCorrectAnswer={miscOptions.showCorrectAnswer}
      />
      <Group mt="md" position="apart" align="end">
        <Group>
          <Button
            variant="subtle"
            size="sm"
            onClick={() => {
              const audio = new Audio(`${kanaAudioSource.djtguide}/${currentKana.romaji}.mp3`);
              audio.play();
            }}
          >
            Play sound
          </Button>
          <Button variant="subtle" size="sm" onClick={toggleOptions}>
            Options
          </Button>
        </Group>
        <Group>
          <Tooltip label="Correct / Total" withArrow>
            <Text>{`${stats.correctCount} / ${stats.totalCount}`}</Text>
          </Tooltip>
        </Group>
      </Group>
      <Collapse in={openedOptions}>
        <PracticeOptions
          options={options}
          miscOptions={miscOptions}
          onChange={handleOptionsChange}
          onMiscChange={handleMiscOptionsChange}
        />
      </Collapse>
    </TitledCard>
  );
}

export default PracticeCard;
