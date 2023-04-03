import React from "react";
import { Container } from "@mantine/core";
import IntroductionCard from "./components/IntroductionCard";
import PracticeCard from "./components/PracticeCard";
import PracticeKanaInput from "./components/PracticeKanaInput";
import ExplanationCard from "./components/ExplanationCard";

document.onkeydown = () => {
  const kanaInput = document.getElementById(PracticeKanaInput.kanaInputId);
  if (kanaInput) kanaInput.focus();
};

function App() {
  return (
    <Container>
      <IntroductionCard />
      <PracticeCard />
      <ExplanationCard />
    </Container>
  );
}

export default App;
