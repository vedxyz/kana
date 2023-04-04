export const kana = Object.freeze({
  hiragana: {
    regular_vowel: { あ: "a", い: "i", う: "u", え: "e", お: "o" },
    regular_k: { か: "ka", き: "ki", く: "ku", け: "ke", こ: "ko" },
    regular_s: { さ: "sa", し: "shi", す: "su", せ: "se", そ: "so" },
    regular_t: { た: "ta", ち: "chi", つ: "tsu", て: "te", と: "to" },
    regular_n: { な: "na", に: "ni", ぬ: "nu", ね: "ne", の: "no" },
    regular_h: { は: "ha", ひ: "hi", ふ: "fu", へ: "he", ほ: "ho" },
    regular_m: { ま: "ma", み: "mi", む: "mu", め: "me", も: "mo" },
    regular_y: { や: "ya", ゆ: "yu", よ: "yo" },
    regular_r: { ら: "ra", り: "ri", る: "ru", れ: "re", ろ: "ro" },
    regular_w: { わ: "wa", を: ["o", "wo"] },
    regular_nn: { ん: "n" },

    dakuten_g: { が: "ga", ぎ: "gi", ぐ: "gu", げ: "ge", ご: "go" },
    dakuten_z: { ざ: "za", じ: "ji", ず: "zu", ぜ: "ze", ぞ: "zo" },
    dakuten_d: { だ: "da", ぢ: "ji", づ: "zu", で: "de", ど: "do" },
    dakuten_b: { ば: "ba", び: "bi", ぶ: "bu", べ: "be", ぼ: "bo" },
    dakuten_p: { ぱ: "pa", ぴ: "pi", ぷ: "pu", ぺ: "pe", ぽ: "po" },

    combination_k: { きゃ: "kya", きゅ: "kyu", きょ: "kyo" },
    combination_s: { しゃ: "sha", しゅ: "shu", しょ: "sho" },
    combination_c: { ちゃ: "cha", ちゅ: "chu", ちょ: "cho" },
    combination_n: { にゃ: "nya", にゅ: "nyu", にょ: "nyo" },
    combination_h: { ひゃ: "hya", ひゅ: "hyu", ひょ: "hyo" },
    combination_m: { みゃ: "mya", みゅ: "myu", みょ: "myo" },
    combination_r: { りゃ: "rya", りゅ: "ryu", りょ: "ryo" },
    combination_g: { ぎゃ: "gya", ぎゅ: "gyu", ぎょ: "gyo" },
    combination_j1: { じゃ: "ja", じゅ: "ju", じょ: "jo" },
    combination_j2: { ぢゃ: "ja", ぢゅ: "ju", ぢょ: "jo" },
    combination_b: { びゃ: "bya", びゅ: "byu", びょ: "byo" },
    combination_p: { ぴゃ: "pya", ぴゅ: "pyu", ぴょ: "pyo" },
  },
  katakana: {
    regular_vowel: { ア: "a", イ: "i", ウ: "u", エ: "e", オ: "o" },
    regular_k: { カ: "ka", キ: "ki", ク: "ku", ケ: "ke", コ: "ko" },
    regular_s: { サ: "sa", シ: "shi", ス: "su", セ: "se", ソ: "so" },
    regular_t: { タ: "ta", チ: "chi", ツ: "tsu", テ: "te", ト: "to" },
    regular_n: { ナ: "na", ニ: "ni", ヌ: "nu", ネ: "ne", ノ: "no" },
    regular_h: { ハ: "ha", ヒ: "hi", フ: "fu", ヘ: "he", ホ: "ho" },
    regular_m: { マ: "ma", ミ: "mi", ム: "mu", メ: "me", モ: "mo" },
    regular_y: { ヤ: "ya", ユ: "yu", ヨ: "yo" },
    regular_r: { ラ: "ra", リ: "ri", ル: "ru", レ: "re", ロ: "ro" },
    regular_w: { ワ: "wa", ヲ: ["o", "wo"] },
    regular_nn: { ン: "n" },

    dakuten_g: { ガ: "ga", ギ: "gi", グ: "gu", ゲ: "ge", ゴ: "go" },
    dakuten_z: { ザ: "za", ジ: "ji", ズ: "zu", ゼ: "ze", ゾ: "zo" },
    dakuten_d: { ダ: "da", ヂ: "ji", ヅ: "zu", デ: "de", ド: "do" },
    dakuten_b: { バ: "ba", ビ: "bi", ブ: "bu", ベ: "be", ボ: "bo" },
    dakuten_p: { パ: "pa", ピ: "pi", プ: "pu", ペ: "pe", ポ: "po" },

    combination_k: { キャ: "kya", キュ: "kyu", キョ: "kyo" },
    combination_s: { シャ: "sha", シュ: "shu", ショ: "sho" },
    combination_c: { チャ: "cha", チュ: "chu", チョ: "cho" },
    combination_n: { ニャ: "nya", ニュ: "nyu", ニョ: "nyo" },
    combination_h: { ヒャ: "hya", ヒュ: "hyu", ヒョ: "hyo" },
    combination_m: { ミャ: "mya", ミュ: "myu", ミョ: "myo" },
    combination_r: { リャ: "rya", リュ: "ryu", リョ: "ryo" },
    combination_g: { ギャ: "gya", ギュ: "gyu", ギョ: "gyo" },
    combination_j1: { ジャ: "ja", ジュ: "ju", ジョ: "jo" },
    combination_j2: { ヂャ: "ja", ヂュ: "ju", ヂョ: "jo" },
    combination_b: { ビャ: "bya", ビュ: "byu", ビョ: "byo" },
    combination_p: { ピャ: "pya", ピュ: "pyu", ピョ: "pyo" },
  },
});

export const kana2: Kana = kana;

export type Kana = typeof kana;
export type KanaNames = keyof Kana;
export type KanaRowsObject = Kana[KanaNames];
export type KanaRowNames = keyof KanaRowsObject;
export type KanaRows = KanaRowsObject[KanaRowNames];

type UnionKeys<T> = T extends T ? keyof T : never;
type UnionValues<T> = T extends T ? T[keyof T] : never;
export type KanaChars = UnionKeys<KanaRows>;
export type KanaRomaji = UnionValues<KanaRows>;

export type KanaConfiguration = {
  [key in KanaNames]: {
    [key in KanaRowNames]: boolean;
  };
};

export type KanaRomajiMap = { [key: string]: KanaRomaji }; // key: KanaChars

export type KanaLetter = { kana: KanaChars; romaji: KanaRomaji };

export function getDefaultRomaji(romaji: KanaRomaji): string {
  return Array.isArray(romaji) ? romaji[0] : romaji;
}

export function stringifyRomaji(romaji: KanaRomaji): string {
  return Array.isArray(romaji) ? romaji.join(" / ") : romaji;
}

export function getBaseKanaConfiguration(nonempty = false): KanaConfiguration {
  const getKanaRowBooleans = () => ({
    regular_vowel: false,
    regular_k: false,
    regular_s: false,
    regular_t: false,
    regular_n: false,
    regular_h: false,
    regular_m: false,
    regular_y: false,
    regular_r: false,
    regular_w: false,
    regular_nn: false,

    dakuten_g: false,
    dakuten_z: false,
    dakuten_d: false,
    dakuten_b: false,
    dakuten_p: false,

    combination_k: false,
    combination_s: false,
    combination_c: false,
    combination_n: false,
    combination_h: false,
    combination_m: false,
    combination_r: false,
    combination_g: false,
    combination_j1: false,
    combination_j2: false,
    combination_b: false,
    combination_p: false,
  });

  const config = {
    hiragana: getKanaRowBooleans(),
    katakana: getKanaRowBooleans(),
  };
  config.hiragana.regular_vowel = nonempty;

  return config;
}

export const kanaMap: KanaRomajiMap = Object.freeze(
  Object.assign({}, ...[kana.hiragana, kana.katakana].map((rows) => Object.values(rows)).flat()),
);

export function kanaConfigurationToMap(configuration: KanaConfiguration): KanaRomajiMap {
  const enabledKanaRows: KanaRows[] = [];

  Object.entries(configuration).forEach(([kanaName, kanaConfig]) => {
    Object.entries(kanaConfig).forEach(([rowName, rowEnabled]) => {
      const kanaRows = kana[kanaName as KanaNames][rowName as KanaRowNames];
      if (rowEnabled) enabledKanaRows.push(kanaRows);
    });
  });

  return Object.assign({}, ...enabledKanaRows);
}

export function kanaMapToArray(kanaMap: KanaRomajiMap): KanaLetter[] {
  return Object.entries(kanaMap).map(([kana, romaji]) => ({ kana: kana as KanaChars, romaji }));
}

/**
 * Durstenfeld shuffle (in-place)
 */
export function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// TODO: allow switching between the two shuffling algorithms

/**
 * Shuffles roughly uniformly
 */
export function shuffledStream<T>(array: readonly T[]) {
  if (array.length === 0) throw Error();

  const pool = array.slice();
  let index = 0;
  let previousItem: T;

  shuffleArray(pool);

  const next = () => {
    const item = pool[index++];

    if (index === pool.length) {
      shuffleArray(pool);
      index = 0;

      // Prevent duplicates (when first in new shuffle equals last in previous shuffle)
      if (pool[index] === item) {
        pool.shift();
        pool.splice(Math.floor(1 + Math.random() * pool.length), 0, item);
      }
    }

    previousItem = item;
    return item;
  };

  const current = () => previousItem ?? next();

  return { next, current };
}

/**
 * Shuffles based on interaction
 */
export function spacedRepetitionStream<T>(array: readonly T[]) {
  if (array.length === 0) throw Error();

  const originalItems = array.slice();

  const itemQueue: T[] = [];
  let previousItem: T;

  const failedItemQueue: (T | null)[] = Array(14).fill(null);

  const shiftFailedItemQueue = () => {
    const failedItem = failedItemQueue.shift();
    if (failedItem === undefined) throw Error("Invalid state");

    if (failedItemQueue.length < 14) failedItemQueue.push(null);

    return failedItem;
  };

  const generateNextItem = () => {
    const pendingFailedItem = shiftFailedItemQueue();

    if (pendingFailedItem !== null) {
      itemQueue.unshift(pendingFailedItem);
    } else if (itemQueue.length === 0) {
      shuffleArray(originalItems);
      itemQueue.push(...originalItems);

      // Prevent (some) duplicates
      if (itemQueue[0] === previousItem) {
        itemQueue.shift();
        itemQueue.splice(Math.floor(1 + Math.random() * itemQueue.length), 0, previousItem);
      }
    }

    const itemCandidate = itemQueue.shift();
    if (itemCandidate === undefined) throw Error("Invalid state");
    return itemCandidate;
  };

  const next = () => {
    let nextItemCandidate = generateNextItem();
    while (previousItem === nextItemCandidate && originalItems.length > 1) {
      nextItemCandidate = generateNextItem();
    }

    previousItem = nextItemCandidate;
    return previousItem;
  };

  const current = () => previousItem ?? next();

  const onFail = () => {
    let existingCount = 0;
    for (const element of failedItemQueue) if (element === previousItem) existingCount++;
    if (existingCount > 4) return;

    [3, 13].forEach((insertionIndex) => {
      if (failedItemQueue[insertionIndex] === null) failedItemQueue[insertionIndex] = previousItem;
      else failedItemQueue.splice(insertionIndex, 0, previousItem);
    });
  };

  return { next, current, onFail };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function test_streamCoverage_iterationCount() {
  const kanaTestArray = Object.entries(kanaMap)
    .map(([kana, romaji]) => ({ kana, romaji }))
    .slice(0, 20);
  const { next, onFail } = spacedRepetitionStream(kanaTestArray);
  const coverageSet = new Set();
  for (let i = 0; coverageSet.size !== kanaTestArray.length && i < 2000; i++) {
    const { kana, romaji } = next();
    if (i % 3 === 0) onFail();
    coverageSet.add(kana);
    console.log(`shuffle: ${kana} ${romaji} ${i}`);
  }
  console.log(coverageSet.size);
}
