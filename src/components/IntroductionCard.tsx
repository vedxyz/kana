import React from "react";
import { Anchor, Text, Title, Tooltip } from "@mantine/core";
import TitledCard from "./TitledCard";
import { tooltipProps } from "../utilities/tooltip";

function IntroductionCard() {
  const bold = (text: string) => (
    <Text span italic weight="bold">
      {text}
    </Text>
  );

  return (
    <TitledCard title="Kana" collapsible>
      <Text>
        Kana is the very first thing a Japanese learner needs to learn. It refers to {bold("hiragana")} and{" "}
        {bold("katakana")}, the two scripts of the Japanese language. You can read the relevant section and resources on
        the brilliant <Anchor href="http://learnjapanese.moe/guide/#kana">learnjapanese.moe</Anchor> guide to learn
        more.
      </Text>

      <Title order={4} mt="sm">
        About
      </Title>
      <Text>
        This is a page aiming to be an easy, effective, quick way to learn kana without suffering through mnemonics and
        such. All you need to do is to spend some time with the extremely simple exercise below, in which you will try
        to answer with the correct{" "}
        <Tooltip {...tooltipProps} label="Romanized spelling used to transliterate Japanese">
          <Text span italic c="blue.2" sx={{ textDecoration: "underline dotted" }}>
            romaji
          </Text>
        </Tooltip>{" "}
        for the shown kana. This way of learning is also referred to as brute forcing, because you try again and again
        until it sticks, and in the case of kana, it sticks rather easily with this method.
      </Text>
      <Text mt="xs" fz="xs">
        Have an issue/request/etc.? Open an issue on <Anchor href="https://github.com/vedxyz/kana">GitHub</Anchor>.
      </Text>
    </TitledCard>
  );
}

export default IntroductionCard;
