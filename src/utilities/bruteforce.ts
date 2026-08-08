import {
  getBaseKanaConfiguration,
  kana,
  KanaConfiguration,
  KanaLetter,
  kanaMapToArray,
  KanaNames,
  KanaRowNames,
} from "../utilities/kana";

export interface BruteForcePracticeStage {
  name: string;
  kana: KanaRowNames[];
}

const bruteForcePracticeStages: readonly BruteForcePracticeStage[] = Object.freeze([
  {
    name: "Vowels",
    kana: ["regular_vowel"],
  },
  {
    name: "Consonant K",
    kana: ["regular_k"],
  },
  {
    name: "Consonant S",
    kana: ["regular_s"],
  },
  {
    name: "Consonant T",
    kana: ["regular_t"],
  },
  {
    name: "Consonant N",
    kana: ["regular_n"],
  },
  {
    name: "Consonant H",
    kana: ["regular_h"],
  },
  {
    name: "Consonant M",
    kana: ["regular_m"],
  },
  {
    name: "Consonant Y",
    kana: ["regular_y"],
  },
  {
    name: "Consonant R",
    kana: ["regular_r"],
  },
  {
    name: "Consonant W",
    kana: ["regular_w"],
  },
  {
    name: "Consonant N (single)",
    kana: ["regular_nn"],
  },
  {
    name: "Dakuten",
    kana: ["dakuten_g", "dakuten_z", "dakuten_d", "dakuten_b", "dakuten_p"],
  },
  {
    name: "Combinations",
    kana: [
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
    ],
  },
]);

const getNextStage = (stage: BruteForcePracticeStage) =>
  bruteForcePracticeStages[bruteForcePracticeStages.findIndex((s) => s.name === stage.name) + 1];

const isFinalStage = (stage: BruteForcePracticeStage) =>
  bruteForcePracticeStages.findIndex((s) => s.name === stage.name) === bruteForcePracticeStages.length - 1;

const getKanaOfStage = (kanaType: KanaNames, stage: BruteForcePracticeStage): KanaLetter[] => {
  return stage.kana.reduce<KanaLetter[]>((acc, key) => acc.concat(kanaMapToArray(kana[kanaType][key])), []);
};

const getAllKanaForStage = (kanaType: KanaNames, stage: BruteForcePracticeStage): KanaLetter[] => {
  const stageIndex = bruteForcePracticeStages.findIndex((s) => s.name === stage.name);
  if (stageIndex === -1) throw Error("Invalid state");

  const allKana: KanaLetter[] = [];

  for (let i = 0; i <= stageIndex; i++) {
    allKana.push(...getKanaOfStage(kanaType, bruteForcePracticeStages[i]));
  }

  return allKana;
};

const buildKanaOfStage = (kanaType: KanaNames, stage: BruteForcePracticeStage, learning: boolean) =>
  learning ? bruteForce.getKanaOfStage(kanaType, stage) : bruteForce.getAllKanaForStage(kanaType, stage);

const getKanaConfigurationForStage = (
  kanaType: KanaNames,
  stage: BruteForcePracticeStage,
  includePrevious: boolean,
): KanaConfiguration => {
  const config = getBaseKanaConfiguration();

  const keys: KanaRowNames[] = [];
  keys.push(...stage.kana);

  if (includePrevious) {
    const stageIndex = bruteForcePracticeStages.findIndex((s) => s.name === stage.name);

    for (let i = 0; i < stageIndex; i++) {
      keys.push(...bruteForcePracticeStages[i].kana);
    }
  }

  keys.forEach((key) => (config[kanaType][key] = true));

  return config;
};

const getStageByName = (name: string): BruteForcePracticeStage | undefined =>
  bruteForcePracticeStages.find((s) => s.name === name);

export interface BruteForceProgress {
  stageName: string;
  learning: boolean;
}

const progressStorageKey = (kanaType: KanaNames) => `bruteforce-progress-${kanaType}`;

const saveProgress = (kanaType: KanaNames, progress: BruteForceProgress): void => {
  try {
    localStorage.setItem(progressStorageKey(kanaType), JSON.stringify(progress));
  } catch {
    // Silently ignore storage errors (e.g. quota exceeded, private browsing)
  }
};

const loadProgress = (kanaType: KanaNames): BruteForceProgress | null => {
  try {
    const raw = localStorage.getItem(progressStorageKey(kanaType));
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed.stageName === "string" && typeof parsed.learning === "boolean") {
      return parsed as BruteForceProgress;
    }
    return null;
  } catch {
    return null;
  }
};

const clearProgress = (kanaType: KanaNames): void => {
  try {
    localStorage.removeItem(progressStorageKey(kanaType));
  } catch {
    // Silently ignore
  }
};

export const bruteForce = {
  stages: bruteForcePracticeStages,
  getNextStage,
  isFinalStage,
  getStageByName,
  getKanaOfStage,
  getAllKanaForStage,
  buildKanaOfStage,
  getKanaConfigurationForStage,
  saveProgress,
  loadProgress,
  clearProgress,
};
