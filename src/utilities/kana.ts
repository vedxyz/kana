export const kana = Object.freeze({
  hiragana: {
    regular: {
      vowel: { あ: "a", い: "i", う: "u", え: "e", お: "o" },
      k: { か: "ka", き: "ki", く: "ku", け: "ke", こ: "ko" },
      s: { さ: "sa", し: "shi", す: "su", せ: "se", そ: "so" },
      t: { た: "ta", ち: "chi", つ: "tsu", て: "te", と: "to" },
      n: { な: "na", に: "ni", ぬ: "nu", ね: "ne", の: "no" },
      h: { は: "ha", ひ: "hi", ふ: "fu", へ: "he", ほ: "ho" },
      m: { ま: "ma", み: "mi", む: "mu", め: "me", も: "mo" },
      y: { や: "ya", ゆ: "yu", よ: "yo" },
      r: { ら: "ra", り: "ri", る: "ru", れ: "re", ろ: "ro" },
      w: { わ: "wa", を: ["o", "wo"] },
      nn: { ん: "n" },
    },

    dakuten: {
      g: { が: "ga", ぎ: "gi", ぐ: "gu", げ: "ge", ご: "go" },
      z: { ざ: "za", じ: "ji", ず: "zu", ぜ: "ze", ぞ: "zo" },
      d: { だ: "da", ぢ: "ji", づ: "zu", で: "de", ど: "do" },
      b: { ば: "ba", び: "bi", ぶ: "bu", べ: "be", ぼ: "bo" },
      p: { ぱ: "pa", ぴ: "pi", ぷ: "pu", ぺ: "pe", ぽ: "po" },
    },

    combinations: {
      k: { きゃ: "kya", きゅ: "kyu", きょ: "kyo" },
      s: { しゃ: "sha", しゅ: "shu", しょ: "sho" },
      c: { ちゃ: "cha", ちゅ: "chu", ちょ: "cho" },
      n: { にゃ: "nya", にゅ: "nyu", にょ: "nyo" },
      h: { ひゃ: "hya", ひゅ: "hyu", ひょ: "hyo" },
      m: { みゃ: "mya", みゅ: "myu", みょ: "myo" },
      r: { りゃ: "rya", りゅ: "ryu", りょ: "ryo" },
      g: { ぎゃ: "gya", ぎゅ: "gyu", ぎょ: "gyo" },
      j1: { じゃ: "ja", じゅ: "ju", じょ: "jo" },
      j2: { ぢゃ: "ja", ぢゅ: "ju", ぢょ: "jo" },
      b: { びゃ: "bya", びゅ: "byu", びょ: "byo" },
      p: { ぴゃ: "pya", ぴゅ: "pyu", ぴょ: "pyo" },
    },
  },
  katakana: {
    regular: {
      vowel: { ア: "a", イ: "i", ウ: "u", エ: "e", オ: "o" },
      k: { カ: "ka", キ: "ki", ク: "ku", ケ: "ke", コ: "ko" },
      s: { サ: "sa", シ: "shi", ス: "su", セ: "se", ソ: "so" },
      t: { タ: "ta", チ: "chi", ツ: "tsu", テ: "te", ト: "to" },
      n: { ナ: "na", ニ: "ni", ヌ: "nu", ネ: "ne", ノ: "no" },
      h: { ハ: "ha", ヒ: "hi", フ: "fu", ヘ: "he", ホ: "ho" },
      m: { マ: "ma", ミ: "mi", ム: "mu", メ: "me", モ: "mo" },
      y: { ヤ: "ya", ユ: "yu", ヨ: "yo" },
      r: { ラ: "ra", リ: "ri", ル: "ru", レ: "re", ロ: "ro" },
      w: { ワ: "wa", ヲ: ["o", "wo"] },
      nn: { ン: "n" },
    },

    dakuten: {
      g: { ガ: "ga", ギ: "gi", グ: "gu", ゲ: "ge", ゴ: "go" },
      z: { ザ: "za", ジ: "ji", ズ: "zu", ゼ: "ze", ゾ: "zo" },
      d: { ダ: "da", ヂ: "ji", ヅ: "zu", デ: "de", ド: "do" },
      b: { バ: "ba", ビ: "bi", ブ: "bu", ベ: "be", ボ: "bo" },
      p: { パ: "pa", ピ: "pi", プ: "pu", ペ: "pe", ポ: "po" },
    },

    combinations: {
      k: { キャ: "kya", キュ: "kyu", キョ: "kyo" },
      s: { シャ: "sha", シュ: "shu", ショ: "sho" },
      c: { チャ: "cha", チュ: "chu", チョ: "cho" },
      n: { ニャ: "nya", ニュ: "nyu", ニョ: "nyo" },
      h: { ヒャ: "hya", ヒュ: "hyu", ヒョ: "hyo" },
      m: { ミャ: "mya", ミュ: "myu", ミョ: "myo" },
      r: { リャ: "rya", リュ: "ryu", リョ: "ryo" },
      g: { ギャ: "gya", ギュ: "gyu", ギョ: "gyo" },
      j1: { ジャ: "ja", ジュ: "ju", ジョ: "jo" },
      j2: { ヂャ: "ja", ヂュ: "ju", ヂョ: "jo" },
      b: { ビャ: "bya", ビュ: "byu", ビョ: "byo" },
      p: { ピャ: "pya", ピュ: "pyu", ピョ: "pyo" },
    },
  },
});

export function getBaseKanaConfiguration() {
  return {
    hiragana: {
      regular: {
        vowel: false,
        k: false,
        s: false,
        t: false,
        n: false,
        h: false,
        m: false,
        y: false,
        r: false,
        w: false,
        nn: false,
      },

      dakuten: {
        g: false,
        z: false,
        d: false,
        b: false,
        p: false,
      },

      combinations: {
        k: false,
        s: false,
        c: false,
        n: false,
        h: false,
        m: false,
        r: false,
        g: false,
        j1: false,
        j2: false,
        b: false,
        p: false,
      },
    },
    katakana: {
      regular: {
        vowel: false,
        k: false,
        s: false,
        t: false,
        n: false,
        h: false,
        m: false,
        y: false,
        r: false,
        w: false,
        nn: false,
      },

      dakuten: {
        g: false,
        z: false,
        d: false,
        b: false,
        p: false,
      },

      combinations: {
        k: false,
        s: false,
        c: false,
        n: false,
        h: false,
        m: false,
        r: false,
        g: false,
        j1: false,
        j2: false,
        b: false,
        p: false,
      },
    },
  };
}

type KanaRomajiMap = { [key: string]: string | string[] };

export const kanaMap: KanaRomajiMap = Object.freeze(
  Object.assign(
    {},
    ...[
      kana.hiragana.regular,
      kana.hiragana.dakuten,
      kana.hiragana.combinations,
      kana.katakana.regular,
      kana.katakana.dakuten,
      kana.katakana.combinations,
    ]
      .map((rowMap) => Object.values(rowMap))
      .flat(),
  ),
);

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
    while (previousItem === nextItemCandidate) {
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
test_streamCoverage_iterationCount();
