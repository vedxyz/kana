export interface BasicDigit {
  kanji: string;
  digit: number;
  romaji: string | string[];
  reading: string | string[];
}

/** A question, along with every form its answer may be given in */
export interface NumberQuestion {
  kana: string;
  romaji: string | string[];
  reading: string | string[];
}

export const basicDigits: readonly BasicDigit[] = Object.freeze([
  { kanji: "零", digit: 0, romaji: "zero", reading: ["れい", "ゼロ"] },
  { kanji: "〇", digit: 0, romaji: "zero", reading: ["れい", "ゼロ"] },
  { kanji: "一", digit: 1, romaji: "ichi", reading: "いち" },
  { kanji: "二", digit: 2, romaji: "ni", reading: "に" },
  { kanji: "三", digit: 3, romaji: "san", reading: "さん" },
  { kanji: "四", digit: 4, romaji: ["yon", "shi"], reading: ["よん", "し"] },
  { kanji: "五", digit: 5, romaji: "go", reading: "ご" },
  { kanji: "六", digit: 6, romaji: "roku", reading: "ろく" },
  { kanji: "七", digit: 7, romaji: ["nana", "shichi"], reading: ["なな", "しち"] },
  { kanji: "八", digit: 8, romaji: "hachi", reading: "はち" },
  { kanji: "九", digit: 9, romaji: ["kyuu", "ku"], reading: ["きゅう", "く"] },
  { kanji: "十", digit: 10, romaji: "juu", reading: "じゅう" },
  { kanji: "百", digit: 100, romaji: "hyaku", reading: "ひゃく" },
  { kanji: "千", digit: 1000, romaji: "sen", reading: "せん" },
  { kanji: "万", digit: 10000, romaji: "man", reading: "まん" },
]);

const digitKanji = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];

const digitKana = ["", "いち", "に", "さん", "よん", "ご", "ろく", "なな", "はち", "きゅう"];

// Counts whose reading is not simply the digit followed by the unit
const senKana: { [key: number]: string } = { 1: "せん", 3: "さんぜん", 8: "はっせん" };
const hyakuKana: { [key: number]: string } = { 1: "ひゃく", 3: "さんびゃく", 6: "ろっぴゃく", 8: "はっぴゃく" };

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

/**
 * Only the everyday reading is produced: 四 is よん rather than し, 七 is なな rather than しち,
 * and 九 is きゅう rather than く, matching the canonical form {@link numberToKanji} builds.
 */
export function numberToKana(n: number): string {
  if (n < 0 || n > 99999 || !Number.isInteger(n)) throw Error(`Invalid number: ${n}`);
  if (n === 0) return "れい";

  let result = "";
  const man = Math.floor(n / 10000);
  const sen = Math.floor((n % 10000) / 1000);
  const hyaku = Math.floor((n % 1000) / 100);
  const juu = Math.floor((n % 100) / 10);
  const ichi = n % 10;

  if (man > 0) result += digitKana[man] + "まん";
  if (sen > 0) result += senKana[sen] ?? digitKana[sen] + "せん";
  if (hyaku > 0) result += hyakuKana[hyaku] ?? digitKana[hyaku] + "ひゃく";
  if (juu > 0) result += (juu === 1 ? "" : digitKana[juu]) + "じゅう";
  if (ichi > 0) result += digitKana[ichi];

  return result;
}

export function generateCompoundQuestion(maxRange: number): NumberQuestion {
  const n = 1 + Math.floor(Math.random() * maxRange);
  return { kana: numberToKanji(n), romaji: String(n), reading: numberToKana(n) };
}

export function getBasicDigitQuestion(digit: BasicDigit, mode: "kanji_to_romaji" | "digits_to_romaji"): NumberQuestion {
  if (mode === "kanji_to_romaji") {
    return { kana: digit.kanji, romaji: digit.romaji, reading: digit.reading };
  }
  return { kana: String(digit.digit), romaji: digit.romaji, reading: digit.reading };
}
