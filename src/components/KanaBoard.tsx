import { Group } from "@mantine/core";
import React from "react";
import { kana } from "../utilities/kana";
import KanaBoardRow from "./KanaBoardRow";

const kanaMainRows = {
  hiragana: {
    vowel: ["あ", "い", "う", "え", "お"],
    k: ["か", "き", "く", "け", "こ"],
    s: ["さ", "し", "す", "せ", "そ"],
    t: ["た", "ち", "つ", "て", "と"],
    n: ["な", "に", "ぬ", "ね", "の"],
    h: ["は", "ひ", "ふ", "へ", "ほ"],
    m: ["ま", "み", "む", "め", "も"],
    y: ["や", null, "ゆ", null, "よ"],
    r: ["ら", "り", "る", "れ", "ろ"],
    w: ["わ", null, null, null, "を"],
    nn: [null, null, null, null, "ん"],
    g: ["が", "ぎ", "ぐ", "げ", "ご"],
    z: ["ざ", "じ", "ず", "ぜ", "ぞ"],
    d: ["だ", "ぢ", "づ", "で", "ど"],
    b: ["ば", "び", "ぶ", "べ", "ぼ"],
    p: ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"],
  },
  katakana: {
    vowel: ["ア", "イ", "ウ", "エ", "オ"],
    k: ["カ", "キ", "ク", "ケ", "コ"],
    s: ["サ", "シ", "ス", "セ", "ソ"],
    t: ["タ", "チ", "ツ", "テ", "ト"],
    n: ["ナ", "ニ", "ヌ", "ネ", "ノ"],
    h: ["ハ", "ヒ", "フ", "ヘ", "ホ"],
    m: ["マ", "ミ", "ム", "メ", "モ"],
    y: ["ヤ", null, "ユ", null, "ヨ"],
    r: ["ラ", "リ", "ル", "レ", "ロ"],
    w: ["ワ", null, null, null, "ヲ"],
    nn: [null, null, null, null, "ン"],
    g: ["ガ", "ギ", "グ", "ゲ", "ゴ"],
    z: ["ザ", "ジ", "ズ", "ゼ", "ゾ"],
    d: ["ダ", "ヂ", "ヅ", "デ", "ド"],
    b: ["バ", "ビ", "ブ", "ベ", "ボ"],
    p: ["パ", "ピ", "プ", "ペ", "ポ"],
  },
};

const kanaCombinationRows = {
  hiragana: {
    k: ["きゃ", "きゅ", "きょ"],
    s: ["しゃ", "しゅ", "しょ"],
    c: ["ちゃ", "ちゅ", "ちょ"],
    n: ["にゃ", "にゅ", "にょ"],
    h: ["ひゃ", "ひゅ", "ひょ"],
    m: ["みゃ", "みゅ", "みょ"],
    r: ["りゃ", "りゅ", "りょ"],
    g: ["ぎゃ", "ぎゅ", "ぎょ"],
    j1: ["じゃ", "じゅ", "じょ"],
    j2: ["ぢゃ", "ぢゅ", "ぢょ"],
    b: ["びゃ", "びゅ", "びょ"],
    p: ["ぴゃ", "ぴゅ", "ぴょ"],
  },
  katakana: {
    k: ["キャ", "キュ", "キョ"],
    s: ["シャ", "シュ", "ショ"],
    c: ["チャ", "チュ", "チョ"],
    n: ["ニャ", "ニュ", "ニョ"],
    h: ["ヒャ", "ヒュ", "ヒョ"],
    m: ["ミャ", "ミュ", "ミョ"],
    r: ["リャ", "リュ", "リョ"],
    g: ["ギャ", "ギュ", "ギョ"],
    j1: ["ジャ", "ジュ", "ジョ"],
    j2: ["ヂャ", "ヂュ", "ヂョ"],
    b: ["ビャ", "ビュ", "ビョ"],
    p: ["ピャ", "ピュ", "ピョ"],
  },
};

const objectifyKana = (kanaMap: { [key: string]: string | string[] }, kanaStr: string | null) =>
  kanaStr
    ? {
        kana: kanaStr,
        romaji: kanaMap[kanaStr],
      }
    : null;

const makeRow = (kanaMap: { [key: string]: string | string[] }, kanaStrs: (string | null)[]) => {
  return kanaStrs.map((str) => objectifyKana(kanaMap, str));
};

export interface KanaBoardProps {
  kanaType: keyof typeof kana;
  combinations?: boolean;
}

function KanaMainBoard({ kanaType }: KanaBoardProps) {
  const rowArrays = kanaMainRows[kanaType];

  return (
    <Group p="xs" bg="dark.8">
      <KanaBoardRow content={makeRow(kana[kanaType].regular.vowel, rowArrays["vowel"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].regular.k, rowArrays["k"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].regular.s, rowArrays["s"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].regular.t, rowArrays["t"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].regular.n, rowArrays["n"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].regular.h, rowArrays["h"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].regular.m, rowArrays["m"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].regular.y, rowArrays["y"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].regular.r, rowArrays["r"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].regular.w, rowArrays["w"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].regular.nn, rowArrays["nn"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].dakuten.g, rowArrays["g"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].dakuten.z, rowArrays["z"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].dakuten.d, rowArrays["d"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].dakuten.b, rowArrays["b"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].dakuten.p, rowArrays["p"])} />
    </Group>
  );
}

function KanaCombinationsBoard({ kanaType }: KanaBoardProps) {
  const rowArrays = kanaCombinationRows[kanaType];

  return (
    <Group p="xs" bg="dark.8" sx={{ gap: "0.4rem" }}>
      <KanaBoardRow content={makeRow(kana[kanaType].combinations.k, rowArrays["k"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].combinations.s, rowArrays["s"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].combinations.c, rowArrays["c"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].combinations.n, rowArrays["n"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].combinations.h, rowArrays["h"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].combinations.m, rowArrays["m"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].combinations.r, rowArrays["r"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].combinations.g, rowArrays["g"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].combinations.j1, rowArrays["j1"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].combinations.j2, rowArrays["j2"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].combinations.b, rowArrays["b"])} />
      <KanaBoardRow content={makeRow(kana[kanaType].combinations.p, rowArrays["p"])} />
    </Group>
  );
}

function KanaBoard({ kanaType, combinations = false }: KanaBoardProps) {
  return combinations ? <KanaCombinationsBoard kanaType={kanaType} /> : <KanaMainBoard kanaType={kanaType} />;
}

export default KanaBoard;
