export const numbers = Object.freeze({
  kana_to_digits: {
    零: 0,
    〇: 0,
    一: 1,
    二: 2,
    三: 3,
    四: 4,
    五: 5,
    六: 6,
    七: 7,
    八: 8,
    九: 9,
    十: 10,
  },
  kana_to_romaji: {
    零: "zero",
    〇: "zero",
    一: "ichi",
    二: "ni",
    三: "san",
    四: ["yon", "shi"],
    五: "go",
    六: "roku",
    七: ["nana", "shichi"],
    八: "hachi",
    九: ["kyuu", "kuu"],
    十: "juu",
  },
});

export type JpnNumbers = typeof numbers;
export type JpnNumbersNames = keyof JpnNumbers;
type JpnNumbersRowsObject = JpnNumbers[JpnNumbersNames];
export type JpnNumbersKana = keyof JpnNumbersRowsObject;

export function getDefaultRomaji(romaji: string | string[]): string {
  return Array.isArray(romaji) ? romaji[0] : romaji;
}

export function stringifyRomaji(romaji: string | string[]): string {
  return Array.isArray(romaji) ? romaji.join(" / ") : romaji;
}

export function kanaObject(kana: string, romaji: string | string[]) {
  return {
    kana,
    romaji,
  };
}
