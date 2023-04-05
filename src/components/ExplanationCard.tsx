import React from "react";
import { Anchor, List, Text } from "@mantine/core";
import TitledCard from "./TitledCard";
import { IconArrowNarrowRight } from "@tabler/icons-react";

function ExplanationCard() {
  const RightArrow = <IconArrowNarrowRight style={{ verticalAlign: "middle" }} />;

  return (
    <TitledCard title="Explanation" titleOrder={3} collapsible>
      <div
        dangerouslySetInnerHTML={{ __html: "<!-- This information was taken/paraphrased from the DJT kana page. -->" }}
      />
      <Text>
        Some kana have two dots (◌゙,{" "}
        <Anchor href="https://en.wikipedia.org/wiki/Dakuten" italic>
          dakuten
        </Anchor>
        ) next to them to indicate that the consonant is &quot;muddied&quot; For example, か (ka) becomes が (ga). The
        consonants transform as follows:
      </Text>
      <List sx={{ display: "flex", gap: "2.5rem" }}>
        <List.Item>k {RightArrow} g</List.Item>
        <List.Item>t {RightArrow} d</List.Item>
        <List.Item>h/f {RightArrow} b</List.Item>
        <List.Item>s/ts {RightArrow} z</List.Item>
        <List.Item>sh/ch {RightArrow} j</List.Item>
      </List>
      <Text>
        Some other kana add a circle (◌゚) to indicate a &quot;p&quot; transformation. For example, ほ (ho) becomes ぽ
        (po).
      </Text>
      <Text mt="sm">
        The smaller kana (ゅ, ょ, ゃ, ...) are used to combine kana sounds. For example, in ぎゃ, the consonant of ぎ
        (gi) combines with the sound from や (ya) to form &quot;gya&quot; The small っ (distinct from つ/tsu) is not
        itself pronounced, but lengthens the consonant that follows, as in にっぽん (ni
        <Text span weight={700}>
          pp
        </Text>
        on).
      </Text>
      <Text italic mt="sm">
        See the relevant sections on{" "}
        <Anchor href="https://itazuraneko.neocities.org/grammar/taekim#0%20The%20Writing%20System">
          Tae Kim&apos;s Guide
        </Anchor>{" "}
        for more information.
      </Text>
    </TitledCard>
  );
}

export default ExplanationCard;
