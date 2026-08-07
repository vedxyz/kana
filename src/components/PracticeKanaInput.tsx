import { Container, Group, Stack, Text, TextInput, Tooltip } from "@mantine/core";
import React, { ChangeEventHandler, CompositionEventHandler, KeyboardEventHandler, useRef, useState } from "react";
import { kanaMap, stringifyRomaji, swapKanaScript } from "../utilities/kana";
import { tooltipProps } from "../utilities/tooltip";

const kanaInputId = "kana-input";

const toAnswers = (answer: string | string[]): string[] => (Array.isArray(answer) ? answer : [answer]);

// "n" is a prefix of every n-row romaji, so on its own it is a partial answer rather than a wrong one
const romajiSet = new Set(
  Object.values(kanaMap)
    .flat()
    .filter((val) => val !== "n"),
);

// Same idea for kana: き is a step towards きゃ, so only kana that no other kana begins with can be wrong
const kanaChars = Object.keys(kanaMap);
const kanaSet = new Set(
  kanaChars.filter((char) => !kanaChars.some((other) => other !== char && other.startsWith(char))),
);

export interface PracticeKanaInputProps {
  /**
   * `reading` is the answer written in kana, accepted alongside `romaji`. It defaults to the
   * displayed `kana`, which is already the reading in every mode but `number` — there the
   * question is kanji or digits, so the reading has to be supplied.
   */
  kana: { kana: string; romaji: string | string[]; reading?: string | string[] };
  showAnswer?: boolean;
  onAnswer: (correct: boolean) => void;
  showCorrectAnswer: boolean;
  mode?: "kana" | "word" | "number";
  placeholder?: string;
  fontSize?: string;
  kanaHeight?: string;
}

function PracticeKanaInput({
  kana: { kana, romaji, reading },
  showAnswer,
  onAnswer,
  showCorrectAnswer,
  mode = "kana",
  placeholder = "romaji",
  fontSize,
  kanaHeight,
}: PracticeKanaInputProps) {
  const stringifiedRomaji = stringifyRomaji(romaji);

  const romajiAnswers = toAnswers(romaji);
  // Either script is accepted regardless of which one the question is written in, so that
  // whoever is typing kana can practise the script they came to practise
  const kanaAnswers = (reading !== undefined ? toAnswers(reading) : mode === "number" ? [] : [kana]).flatMap(
    (answer) => [answer, swapKanaScript(answer)],
  );

  // A kana answer is shorter than its romaji, but an IME still needs room for the romaji being
  // composed into it — and then some, for input such as "texi" becoming ティ
  const maxAnswerLength = Math.max(
    5,
    ...romajiAnswers.map((answer) => answer.length),
    ...kanaAnswers.map((answer) => answer.length * 3),
  );

  const [kanaInputValue, setKanaInputValue] = useState("");
  const [gaveIncorrectAnswer, setGaveIncorrectAnswer] = useState(false);

  const composingRef = useRef(false);
  // Emptying the field mid-composition leaves some IMEs to re-insert their buffer once the
  // composition ends; remember what was accepted so that echo can be dropped rather than
  // spilling into the next question
  const consumedRef = useRef<string | null>(null);

  const resetState = () => {
    setKanaInputValue("");
    setGaveIncorrectAnswer(false);
  };

  const checkInput = (rawValue: string) => {
    // Composed dakuten arrive decomposed from some IMEs, so が never matches が without this
    const value = rawValue.toLowerCase().normalize("NFC");

    if (value === "") {
      setKanaInputValue("");
      return;
    }

    if (consumedRef.current !== null) {
      const consumed = consumedRef.current;
      consumedRef.current = null;
      if (value === consumed) {
        setKanaInputValue("");
        return;
      }
    }

    if (romajiAnswers.includes(value) || kanaAnswers.includes(value)) {
      if (composingRef.current) consumedRef.current = value;
      resetState();
      onAnswer(!gaveIncorrectAnswer);
      return;
    }

    if (mode === "kana" && (romajiSet.has(value) || kanaSet.has(value))) {
      setGaveIncorrectAnswer(true);
    }
    setKanaInputValue(value);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // compositionend does not always arrive, so it cannot be the only thing that ends a
    // composition; an input event that is not itself composing proves there is none in flight
    if (!(event.nativeEvent as InputEvent).isComposing) composingRef.current = false;

    checkInput(event.currentTarget.value);
  };

  const handleCompositionStart = () => {
    composingRef.current = true;
  };

  const handleCompositionEnd: CompositionEventHandler<HTMLInputElement> = (event) => {
    composingRef.current = false;
    checkInput(event.currentTarget.value);
  };

  const skip: KeyboardEventHandler<HTMLInputElement> = (event) => {
    // Enter is also how an IME commits its composition, which must not skip the question
    if (event.nativeEvent.isComposing || composingRef.current) return;

    if (event.key === "Enter") {
      resetState();
      onAnswer(false);
    }
  };

  return (
    <Container>
      <Stack align="center" justify="center" sx={kanaHeight ? { height: kanaHeight } : undefined}>
        <Tooltip {...tooltipProps} key={stringifiedRomaji} label={stringifiedRomaji} opened={showAnswer}>
          <Text size={fontSize ?? (mode === "word" ? "1.4rem" : "3.75rem")}>{kana}</Text>
        </Tooltip>
      </Stack>
      <Group position="center">
        <TextInput
          id={kanaInputId}
          w={mode === "word" ? "14rem" : "6rem"}
          styles={() => ({
            input: {
              textAlign: "center",
            },
            error: {
              textAlign: "center",
            },
          })}
          maxLength={maxAnswerLength}
          placeholder={placeholder}
          value={kanaInputValue}
          error={gaveIncorrectAnswer ? (showCorrectAnswer ? `${kana} = ${stringifiedRomaji}` : true) : false}
          onChange={handleChange}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          onKeyDown={skip}
        />
      </Group>
    </Container>
  );
}

PracticeKanaInput.kanaInputId = kanaInputId;

export default PracticeKanaInput;
