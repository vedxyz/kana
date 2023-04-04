import { ActionIcon, Tooltip } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import React, { useState } from "react";
import BruteForceMenu from "./BruteForceMenu";
import FreePractice from "./FreePractice";
import PracticeMenu from "./PracticeMenu";
import TitledCard from "./TitledCard";
import WordPractice from "./WordPractice";

export interface MiscPracticeOptions {
  showCorrectAnswer: boolean;
}

export type PracticeCardPages = "menu" | "bruteforce" | "free" | "word";

export interface BackToMenuButtonProps {
  onClick: () => void;
}

function BackToMenuButton({ onClick }: BackToMenuButtonProps) {
  return (
    <Tooltip label="Go back to menu" withArrow>
      <ActionIcon variant="light" onClick={onClick}>
        <IconChevronLeft size={32} />
      </ActionIcon>
    </Tooltip>
  );
}

function PracticeCard() {
  const [page, setPage] = useState<PracticeCardPages>("menu");

  const handlePageChange = (newPage: PracticeCardPages) => {
    setPage(newPage);
  };

  const backToMenuButton = <BackToMenuButton onClick={() => handlePageChange("menu")} />;

  let pageElement;
  switch (page) {
    case "menu":
      pageElement = <PracticeMenu onPageChange={handlePageChange} />;
      break;
    case "bruteforce":
      pageElement = <BruteForceMenu />;
      break;
    case "free":
      pageElement = <FreePractice />;
      break;
    case "word":
      pageElement = <WordPractice />;
      break;
  }

  return (
    <TitledCard title="Practice" titleOrder={3} titleActionElement={page !== "menu" ? backToMenuButton : undefined}>
      {pageElement}
    </TitledCard>
  );
}

PracticeCard.BackToMenuButton = BackToMenuButton;

export default PracticeCard;
