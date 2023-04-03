import React from "react";
import { Anchor, Text, Title } from "@mantine/core";
import TitledCard from "./TitledCard";

function IntroductionCard() {
  return (
    <TitledCard title="Kana" collapsible>
      <Title order={4}>What is it?</Title>
      <Text>
        Kana is the very first thing a Japanese learner needs to learn. For more information, you can read the relevant
        section on the brilliant <Anchor href="http://learnjapanese.moe/guide/#kana">learnjapanese.moe</Anchor> guide.
      </Text>

      <Title order={4} mt="sm">
        Where am I?
      </Title>
      <Text>Explain what this page does</Text>
      <Text mt="sm">Elaborate why/how brute forcing works</Text>
    </TitledCard>
  );
}

export default IntroductionCard;
