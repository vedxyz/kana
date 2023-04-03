import React from "react";
import { Anchor, Text, Title } from "@mantine/core";
import TitledCard from "./TitledCard";

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
        such. All you need to do is to spend some time with the extremely simple exercise below. This way of learning is
        also referred to as brute forcing, because you try again and again until it sticks, and in the case of kana, it
        sticks rather easily with this method.
      </Text>
    </TitledCard>
  );
}

export default IntroductionCard;
