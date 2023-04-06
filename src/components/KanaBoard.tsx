import { Checkbox, Container, Group, Text } from "@mantine/core";
import React from "react";
import { KanaChars, KanaConfiguration, kanaMap, KanaNames, KanaRowNames } from "../utilities/kana";
import KanaBoardRow from "./KanaBoardRow";

const kanaRows: { [key in KanaNames]: { [key in KanaRowNames]: (KanaChars | null)[] } } = {
  hiragana: {
    regular_vowel: ["あ", "い", "う", "え", "お"],
    regular_k: ["か", "き", "く", "け", "こ"],
    regular_s: ["さ", "し", "す", "せ", "そ"],
    regular_t: ["た", "ち", "つ", "て", "と"],
    regular_n: ["な", "に", "ぬ", "ね", "の"],
    regular_h: ["は", "ひ", "ふ", "へ", "ほ"],
    regular_m: ["ま", "み", "む", "め", "も"],
    regular_y: ["や", null, "ゆ", null, "よ"],
    regular_r: ["ら", "り", "る", "れ", "ろ"],
    regular_w: ["わ", null, null, null, "を"],
    regular_nn: [null, null, null, null, "ん"],

    dakuten_g: ["が", "ぎ", "ぐ", "げ", "ご"],
    dakuten_z: ["ざ", "じ", "ず", "ぜ", "ぞ"],
    dakuten_d: ["だ", "ぢ", "づ", "で", "ど"],
    dakuten_b: ["ば", "び", "ぶ", "べ", "ぼ"],
    dakuten_p: ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"],

    combination_k: ["きゃ", "きゅ", "きょ"],
    combination_s: ["しゃ", "しゅ", "しょ"],
    combination_c: ["ちゃ", "ちゅ", "ちょ"],
    combination_n: ["にゃ", "にゅ", "にょ"],
    combination_h: ["ひゃ", "ひゅ", "ひょ"],
    combination_m: ["みゃ", "みゅ", "みょ"],
    combination_r: ["りゃ", "りゅ", "りょ"],
    combination_g: ["ぎゃ", "ぎゅ", "ぎょ"],
    combination_j1: ["じゃ", "じゅ", "じょ"],
    combination_j2: ["ぢゃ", "ぢゅ", "ぢょ"],
    combination_b: ["びゃ", "びゅ", "びょ"],
    combination_p: ["ぴゃ", "ぴゅ", "ぴょ"],
  },
  katakana: {
    regular_vowel: ["ア", "イ", "ウ", "エ", "オ"],
    regular_k: ["カ", "キ", "ク", "ケ", "コ"],
    regular_s: ["サ", "シ", "ス", "セ", "ソ"],
    regular_t: ["タ", "チ", "ツ", "テ", "ト"],
    regular_n: ["ナ", "ニ", "ヌ", "ネ", "ノ"],
    regular_h: ["ハ", "ヒ", "フ", "ヘ", "ホ"],
    regular_m: ["マ", "ミ", "ム", "メ", "モ"],
    regular_y: ["ヤ", null, "ユ", null, "ヨ"],
    regular_r: ["ラ", "リ", "ル", "レ", "ロ"],
    regular_w: ["ワ", null, null, null, "ヲ"],
    regular_nn: [null, null, null, null, "ン"],

    dakuten_g: ["ガ", "ギ", "グ", "ゲ", "ゴ"],
    dakuten_z: ["ザ", "ジ", "ズ", "ゼ", "ゾ"],
    dakuten_d: ["ダ", "ヂ", "ヅ", "デ", "ド"],
    dakuten_b: ["バ", "ビ", "ブ", "ベ", "ボ"],
    dakuten_p: ["パ", "ピ", "プ", "ペ", "ポ"],

    combination_k: ["キャ", "キュ", "キョ"],
    combination_s: ["シャ", "シュ", "ショ"],
    combination_c: ["チャ", "チュ", "チョ"],
    combination_n: ["ニャ", "ニュ", "ニョ"],
    combination_h: ["ヒャ", "ヒュ", "ヒョ"],
    combination_m: ["ミャ", "ミュ", "ミョ"],
    combination_r: ["リャ", "リュ", "リョ"],
    combination_g: ["ギャ", "ギュ", "ギョ"],
    combination_j1: ["ジャ", "ジュ", "ジョ"],
    combination_j2: ["ヂャ", "ヂュ", "ヂョ"],
    combination_b: ["ビャ", "ビュ", "ビョ"],
    combination_p: ["ピャ", "ピュ", "ピョ"],
  },
};

const mainRowNames: KanaRowNames[] = [
  "regular_vowel",
  "regular_k",
  "regular_s",
  "regular_t",
  "regular_n",
  "regular_h",
  "regular_m",
  "regular_y",
  "regular_r",
  "regular_w",
  "regular_nn",
  "dakuten_g",
  "dakuten_z",
  "dakuten_d",
  "dakuten_b",
  "dakuten_p",
];

const combinationRowNames: KanaRowNames[] = [
  "combination_k",
  "combination_s",
  "combination_c",
  "combination_n",
  "combination_h",
  "combination_m",
  "combination_r",
  "combination_g",
  "combination_j1",
  "combination_j2",
  "combination_b",
  "combination_p",
];

const makeRowContent = (kanaType: KanaNames, kanaRowName: KanaRowNames) => {
  return kanaRows[kanaType][kanaRowName].map((kanaChar) =>
    kanaChar
      ? {
          kana: kanaChar,
          romaji: kanaMap[kanaChar],
        }
      : null,
  );
};

const getCheckStates = (options: KanaBoardProps["options"]) => {
  const allEntries = Object.entries(options);

  const getBooleansForOptionKey = (optionKey: string) =>
    allEntries.filter(([key]) => key.startsWith(optionKey)).map((o) => o[1]);

  const entries = {
    regular: getBooleansForOptionKey("regular_"),
    dakuten: getBooleansForOptionKey("dakuten_"),
    combination: getBooleansForOptionKey("combination_"),
  };

  const getChecksObject = (category: keyof typeof entries) => ({
    hasChecked: entries[category].includes(true),
    hasUnchecked: entries[category].includes(false),
  });

  const checks = {
    regular: getChecksObject("regular"),
    dakuten: getChecksObject("dakuten"),
    combination: getChecksObject("combination"),
  };

  return checks;
};

export interface KanaBoardProps {
  kanaType: KanaNames;
  combinations?: boolean;
  options: KanaConfiguration[keyof KanaConfiguration];
  onChange: (options: KanaConfiguration[keyof KanaConfiguration]) => void;
}

function KanaBoard({ kanaType, combinations = false, onChange, options }: KanaBoardProps) {
  const rowNames = combinations ? combinationRowNames : mainRowNames;

  const checks = getCheckStates(options);
  const allHasChecked = combinations
    ? checks.combination.hasChecked
    : checks.regular.hasChecked || checks.dakuten.hasChecked;
  const allHasUnchecked = combinations
    ? checks.combination.hasUnchecked
    : checks.regular.hasUnchecked || checks.dakuten.hasUnchecked;

  const handleCheckboxGroupToggle = (category: "regular" | "dakuten" | "all") => {
    const hasUnchecked = category === "all" ? allHasUnchecked : checks[category].hasUnchecked;
    const filteredRowNames = category === "all" ? rowNames : rowNames.filter((n) => n.startsWith(category));

    onChange({
      ...options,
      ...filteredRowNames.reduce((acc, val) => ({ ...acc, [val]: hasUnchecked }), {}),
    });
  };

  return (
    <Container px={0}>
      <Group position="apart" mb="xs" mt="md">
        <Text weight="bold" size="1rem">
          {kanaType[0].toUpperCase() + kanaType.slice(1)} {combinations && "Combinations"}
        </Text>
        <Group>
          <Checkbox
            label="All"
            indeterminate={allHasChecked && allHasUnchecked}
            checked={!allHasUnchecked}
            onChange={() => handleCheckboxGroupToggle("all")}
          />
          {!combinations && (
            <>
              <Checkbox
                label="Regular"
                indeterminate={checks.regular.hasChecked && checks.regular.hasUnchecked}
                checked={!checks.regular.hasUnchecked}
                onChange={() => handleCheckboxGroupToggle("regular")}
              />
              <Checkbox
                label="Dakuten"
                indeterminate={checks.dakuten.hasChecked && checks.dakuten.hasUnchecked}
                checked={!checks.dakuten.hasUnchecked}
                onChange={() => handleCheckboxGroupToggle("dakuten")}
              />
            </>
          )}
        </Group>
      </Group>

      <Group p="xs" bg="dark.8" sx={combinations ? { gap: "0.4rem" } : undefined}>
        {rowNames.map((rowName) => (
          <KanaBoardRow
            key={rowName}
            content={makeRowContent(kanaType, rowName)}
            checked={options[rowName]}
            onChange={(checked) =>
              onChange({
                ...options,
                [rowName]: checked,
              })
            }
          />
        ))}
      </Group>
    </Container>
  );
}

export default KanaBoard;
