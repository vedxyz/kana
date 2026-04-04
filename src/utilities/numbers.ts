export interface BasicDigit {
  kanji: string;
  digit: number;
  romaji: string | string[];
}

export const basicDigits: readonly BasicDigit[] = Object.freeze([
  { kanji: "零", digit: 0, romaji: "zero" },
  { kanji: "〇", digit: 0, romaji: "zero" },
  { kanji: "一", digit: 1, romaji: "ichi" },
  { kanji: "二", digit: 2, romaji: "ni" },
  { kanji: "三", digit: 3, romaji: "san" },
  { kanji: "四", digit: 4, romaji: ["yon", "shi"] },
  { kanji: "五", digit: 5, romaji: "go" },
  { kanji: "六", digit: 6, romaji: "roku" },
  { kanji: "七", digit: 7, romaji: ["nana", "shichi"] },
  { kanji: "八", digit: 8, romaji: "hachi" },
  { kanji: "九", digit: 9, romaji: ["kyuu", "ku"] },
  { kanji: "十", digit: 10, romaji: "juu" },
  { kanji: "百", digit: 100, romaji: "hyaku" },
  { kanji: "千", digit: 1000, romaji: "sen" },
  { kanji: "万", digit: 10000, romaji: "man" },
]);

const digitKanji = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];

export function numberToKanji(n: number): string {
  if (n < 0 || n > 99999 || !Number.isInteger(n)) throw Error(`Invalid number: ${n}`);
  if (n === 0) return "零";

  let result = "";
  const man = Math.floor(n / 10000);
  const sen = Math.floor((n % 10000) / 1000);
  const hyaku = Math.floor((n % 1000) / 100);
  const juu = Math.floor((n % 100) / 10);
  const ichi = n % 10;

  if (man > 0) result += digitKanji[man] + "万";
  if (sen > 0) result += (sen === 1 ? "" : digitKanji[sen]) + "千";
  if (hyaku > 0) result += (hyaku === 1 ? "" : digitKanji[hyaku]) + "百";
  if (juu > 0) result += (juu === 1 ? "" : digitKanji[juu]) + "十";
  if (ichi > 0) result += digitKanji[ichi];

  return result;
}

export function generateCompoundQuestion(maxRange: number): { kana: string; romaji: string } {
  const n = 1 + Math.floor(Math.random() * maxRange);
  return { kana: numberToKanji(n), romaji: String(n) };
}

export function getBasicDigitQuestion(
  digit: BasicDigit,
  mode: "kanji_to_romaji" | "digits_to_romaji",
): { kana: string; romaji: string | string[] } {
  if (mode === "kanji_to_romaji") {
    return { kana: digit.kanji, romaji: digit.romaji };
  }
  return { kana: String(digit.digit), romaji: digit.romaji };
}
