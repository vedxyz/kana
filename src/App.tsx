import React from "react";
import { Container } from "@mantine/core";
import IntroductionCard from "./components/IntroductionCard";
import PracticeCard from "./components/PracticeCard";
import PracticeKanaInput from "./components/PracticeKanaInput";

document.onkeydown = () => {
  const kanaInput = document.getElementById(PracticeKanaInput.kanaInputId);
  if (kanaInput) kanaInput.focus();
};

function App() {
  return (
    <Container>
      <IntroductionCard />
      <PracticeCard />
    </Container>
  );
}

export default App;
