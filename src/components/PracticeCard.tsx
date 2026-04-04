import { ActionIcon, Tooltip } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import React, { useState } from "react";
import AdvancedMenu from "./AdvancedMenu";
import BruteForceMenu from "./BruteForceMenu";
import FreePractice from "./FreePractice";
import NumberPractice from "./NumberPractice";
import PracticeMenu from "./PracticeMenu";
import TitledCard from "./TitledCard";
import WordPractice from "./WordPractice";
import { tooltipProps } from "../utilities/tooltip";

export interface MiscPracticeOptions {
  showCorrectAnswer: boolean;
}

export type PracticeCardPages = "menu" | "bruteforce" | "free" | "word" | "advanced-menu" | "number";

export interface BackToMenuButtonProps {
  onClick: () => void;
}

function BackToMenuButton({ onClick }: BackToMenuButtonProps) {
  return (
    <Tooltip {...tooltipProps} label="Go back to menu">
      <ActionIcon variant="light" onClick={onClick}>
        <IconChevronLeft size={32} />
      </ActionIcon>
    </Tooltip>
  );
}

const parentPage: Partial<Record<PracticeCardPages, PracticeCardPages>> = {
  "advanced-menu": "menu",
  number: "advanced-menu",
};

function PracticeCard() {
  const [page, setPage] = useState<PracticeCardPages>("menu");

  const handlePageChange = (newPage: PracticeCardPages) => {
    setPage(newPage);
  };

  const backTarget = parentPage[page] ?? "menu";
  const backToMenuButton = <BackToMenuButton onClick={() => handlePageChange(backTarget)} />;

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
    case "advanced-menu":
      pageElement = <AdvancedMenu onPageChange={handlePageChange} />;
      break;
    case "number":
      pageElement = <NumberPractice />;
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
