import { Container, Divider, Title } from "@mantine/core";
import React from "react";
import KanaBoard from "./KanaBoard";

function PracticeOptions() {
  return (
    <Container px={0} pt="md">
      <Divider />

      <Title order={5} mt="md" mb="xs">
        Hiragana
      </Title>
      <KanaBoard kanaType="hiragana" />

      <Title order={5} mt="md" mb="xs">
        Hiragana Combinations
      </Title>
      <KanaBoard kanaType="hiragana" combinations />

      <Title order={5} mt="md" mb="xs">
        Katakana
      </Title>
      <KanaBoard kanaType="katakana" />

      <Title order={5} mt="md" mb="xs">
        Katakana Combinations
      </Title>
      <KanaBoard kanaType="katakana" combinations />
    </Container>
  );
}

export default PracticeOptions;
