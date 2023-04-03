import { Checkbox, Container, Stack, Text } from "@mantine/core";
import React from "react";

export interface KanaBoardRowProps {
  content: ({ kana: string; romaji: string | string[] } | null)[];
}

function KanaBoardRow({ content }: KanaBoardRowProps) {
  return (
    <Stack sx={{ gap: 0 }}>
      <Container p={0}>
        <Checkbox />
      </Container>
      {content.map((letter, i) => {
        const visibility = letter === null ? "hidden" : "visible";

        const kana = letter?.kana ?? ".";
        const romaji = letter?.romaji ?? ".";

        const romajiIsArray = Array.isArray(romaji);
        const mainRomaji = romajiIsArray ? romaji[0] : romaji;
        const alternativeRomaji = romajiIsArray ? romaji.slice(1).join(", ") : null;

        return (
          <Stack
            key={i}
            sx={{ textAlign: "center", gap: 0 }}
            mt={8}
            title={romajiIsArray ? `Alternatives: ${alternativeRomaji}` : undefined}
          >
            <Text sx={{ visibility }} size="1.5rem">
              {kana}
            </Text>
            <Text sx={{ visibility }}>{mainRomaji}</Text>
          </Stack>
        );
      })}
    </Stack>
  );
}

export default KanaBoardRow;
