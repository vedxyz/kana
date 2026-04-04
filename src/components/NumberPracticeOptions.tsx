import { Group, Radio, Text, Title } from "@mantine/core";
import React from "react";
import { CompoundRange, NumberPracticeConfiguration } from "./NumberPractice";

export interface NumberPracticeOptionsProps {
  options: NumberPracticeConfiguration;
  onChange: (options: NumberPracticeConfiguration) => void;
}

function NumberPracticeOptions({ options, onChange }: NumberPracticeOptionsProps) {
  return (
    <>
      <Title order={6} mb="sm" pt="md">
        Practice Type
      </Title>
      <Radio.Group
        name="numberPhase"
        value={options.phase}
        onChange={(value) =>
          onChange({
            ...options,
            phase: value as "basic" | "compound",
          })
        }
      >
        <Group mt="xs">
          <Radio value="basic" label="Foundations" />
          <Radio value="compound" label="Compound Numbers" />
        </Group>
      </Radio.Group>

      {options.phase === "basic" && (
        <>
          <Text c="dimmed" fz="xs" mt="xs">
            Individual kanji digits: 一 through 十, plus 百, 千, 万
          </Text>
          <Title order={6} mb="sm" pt="md">
            Mode
          </Title>
          <Radio.Group
            name="basicMode"
            value={options.basicMode}
            onChange={(value) =>
              onChange({
                ...options,
                basicMode: value as "kanji_to_romaji" | "digits_to_romaji",
              })
            }
          >
            <Group mt="xs">
              <Radio value="kanji_to_romaji" label="Kanji → Romaji" />
              <Radio value="digits_to_romaji" label="Digits → Romaji" />
            </Group>
          </Radio.Group>
          <Text c="dimmed" fz="xs" mt="xs">
            {options.basicMode === "kanji_to_romaji"
              ? "See a kanji like 七, type its reading (e.g. nana)"
              : "See a number like 7, type its Japanese reading (e.g. nana)"}
          </Text>
        </>
      )}

      {options.phase === "compound" && (
        <>
          <Text c="dimmed" fz="xs" mt="xs">
            Multi-kanji numbers like 二十三 or 三千四百五十
          </Text>
          <Title order={6} mb="sm" pt="md">
            Range
          </Title>
          <Radio.Group
            name="compoundRange"
            value={String(options.compoundRange)}
            onChange={(value) =>
              onChange({
                ...options,
                compoundRange: Number(value) as CompoundRange,
              })
            }
          >
            <Group mt="xs">
              <Radio value="99" label="Up to 99" />
              <Radio value="999" label="Up to 999" />
              <Radio value="9999" label="Up to 9,999" />
              <Radio value="99999" label="Up to 99,999" />
            </Group>
          </Radio.Group>
          <Text c="dimmed" fz="xs" mt="xs">
            See a compound kanji like 三百二十一, type the number (e.g. 321)
          </Text>
        </>
      )}
    </>
  );
}

export default NumberPracticeOptions;
