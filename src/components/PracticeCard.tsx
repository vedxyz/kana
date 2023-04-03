import { Button, Collapse, Group, Text, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useRef, useState } from "react";
import { kanaMap, spacedRepetitionStream } from "../utilities/kana";
import PracticeKanaInput from "./PracticeKanaInput";
import PracticeOptions from "./PracticeOptions";
import TitledCard from "./TitledCard";

function PracticeCard() {
  const [openedOptions, { toggle: toggleOptions }] = useDisclosure(false);

  const [stats, setStats] = useState({ correctCount: 0, totalCount: 0 });

  // FIXME: configurable kana range
  const streamRef = useRef(spacedRepetitionStream(Object.entries(kanaMap).map(([kana, romaji]) => ({ kana, romaji }))));

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

  return (
    <TitledCard title="Practice" titleOrder={3}>
      <PracticeKanaInput key={currentKana.kana} kana={currentKana} onAnswer={onAnswer} />
      <Group mt="md">
        <Tooltip label="Work In Progress" withArrow>
          <Button variant="subtle" size="sm">
            Play sound
          </Button>
        </Tooltip>
        <Button variant="subtle" size="sm" onClick={toggleOptions}>
          Options
        </Button>
        <Text>{`${stats.correctCount} / ${stats.totalCount}`}</Text>
      </Group>
      <Collapse in={openedOptions}>
        <PracticeOptions />
      </Collapse>
    </TitledCard>
  );
}

export default PracticeCard;
