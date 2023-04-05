import { Button, Collapse, Container, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import { bruteForce, BruteForcePracticeStage } from "../utilities/bruteforce";
import { KanaConfiguration, KanaNames } from "../utilities/kana";
import KanaBoard from "./KanaBoard";

export interface BruteForcePracticeStageOptionProps {
  kanaType: KanaNames;
  stage: BruteForcePracticeStage;
  current?: boolean;
  onStageChange: (newStage: BruteForcePracticeStage) => void;
}

const mockOnChange = () => {
  // do nothing
};

function BruteForcePracticeStageOption({
  kanaType,
  stage,
  current = false,
  onStageChange,
}: BruteForcePracticeStageOptionProps) {
  const buildConfig = () => bruteForce.getKanaConfigurationForStage(kanaType, stage, false);

  const [opened, { toggle }] = useDisclosure(current);
  const [config, setConfig] = useState<KanaConfiguration | null>(current ? buildConfig() : null);

  return (
    <Container mb="xs" sx={{ border: "1px solid #373a40" }} p={8} bg={current ? "dark.4" : undefined}>
      <Group position="apart">
        <Text span>
          {stage.name}{" "}
          {current && (
            <Text span italic weight="bold" fz="sm" ml="lg">
              Currently Attempting
            </Text>
          )}
        </Text>

        {!current && (
          <div>
            <Button
              variant="subtle"
              onClick={() => {
                setConfig(config ?? buildConfig());
                toggle();
              }}
            >
              {opened ? "Hide" : "Show"} Kana
            </Button>
            <Button variant="light" ml="sm" onClick={() => onStageChange(stage)}>
              Continue
            </Button>
          </div>
        )}
      </Group>

      <Collapse in={opened}>
        {config && (
          <>
            <KanaBoard kanaType={kanaType} options={config[kanaType]} onChange={mockOnChange} />
            {stage.name === bruteForce.stages[bruteForce.stages.length - 1].name && (
              <KanaBoard kanaType={kanaType} options={config[kanaType]} onChange={mockOnChange} combinations />
            )}
          </>
        )}
      </Collapse>
    </Container>
  );
}

export default BruteForcePracticeStageOption;
