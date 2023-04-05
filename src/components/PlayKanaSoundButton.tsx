import { Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { getDefaultRomaji, KanaRomaji } from "../utilities/kana";

export const kanaAudioSource = {
  djtguide: (romaji: string) => `https://djtguide.neocities.org/kana/audio/${romaji}.mp3`,
  itazuraneko: (romaji: string) => `https://itazuraneko.neocities.org/learn/kana/audio/${romaji}.mp3`,
};

export interface PlayKanaSoundButtonProps {
  romaji: KanaRomaji;
}

function PlayKanaSoundButton({ romaji }: PlayKanaSoundButtonProps) {
  const effectiveRomaji = getDefaultRomaji(romaji);

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audio === null) return;

    const onCanPlay = () => audio.play();
    audio.addEventListener("canplay", onCanPlay);

    return () => audio.removeEventListener("canplay", onCanPlay);
  }, [audio]);

  return (
    <Button
      variant="subtle"
      size="sm"
      onClick={() => {
        if (audio === null) setAudio(new Audio(kanaAudioSource.djtguide(effectiveRomaji)));
      }}
    >
      Play Sound
    </Button>
  );
}

export default PlayKanaSoundButton;
