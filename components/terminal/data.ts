export type Token = {
  id: string;
  name: string;
  ticker: string;
  age: string;
  creator: string;
  marketCap: string;
  volume: string;
  tx: string;
  holderPct: string;
  oneMinute: string;
  fiveMinute: string;
  oneHour: string;
  avatar: string;
  accent: "green" | "orange" | "violet" | "blue";
};

export type MarketColumn = {
  id: string;
  title: string;
  stage: string;
  tokens: Token[];
};

const newPairs: Token[] = [
  {
    id: "cum-cumcoin",
    name: "Cum Cumcoin",
    ticker: "CUM",
    age: "0s",
    creator: "@xk_yu",
    marketCap: "$4.1K",
    volume: "$0",
    tx: "0",
    holderPct: "0/1",
    oneMinute: "7%",
    fiveMinute: "7%",
    oneHour: "0%",
    avatar: "C",
    accent: "orange"
  },
  {
    id: "puw-pumkin-whale",
    name: "PUW PUMKIN WHALE",
    ticker: "PUW",
    age: "1s",
    creator: "@2nEQ",
    marketCap: "$2.27K",
    volume: "$20",
    tx: "2",
    holderPct: "0/43",
    oneMinute: "1%",
    fiveMinute: "16%",
    oneHour: "0%",
    avatar: "PW",
    accent: "green"
  },
  {
    id: "pan-bondi",
    name: "PAN Pan Bondi",
    ticker: "PAN",
    age: "3s",
    creator: "@TheSupremeDev",
    marketCap: "$5K",
    volume: "$2K",
    tx: "31",
    holderPct: "8/1169",
    oneMinute: "34%",
    fiveMinute: "1%",
    oneHour: "30%",
    avatar: "PB",
    accent: "blue"
  },
  {
    id: "gorillas",
    name: "GORILLAS THE SILVERBACK",
    ticker: "GOR",
    age: "4s",
    creator: "@creatorlessfun",
    marketCap: "$2.24K",
    volume: "$4",
    tx: "3",
    holderPct: "1/285",
    oneMinute: "0%",
    fiveMinute: "0%",
    oneHour: "0%",
    avatar: "GS",
    accent: "green"
  },
  {
    id: "love-coin",
    name: "Love Love coin",
    ticker: "LOVE",
    age: "16s",
    creator: "@popecallso",
    marketCap: "$2.26K",
    volume: "$571",
    tx: "8",
    holderPct: "0/1",
    oneMinute: "1%",
    fiveMinute: "6%",
    oneHour: "0%",
    avatar: "LV",
    accent: "violet"
  },
  {
    id: "roadrunner",
    name: "Roadrunner The Roadrunner",
    ticker: "RR",
    age: "20s",
    creator: "@Klandzy123",
    marketCap: "$6.84K",
    volume: "$4K",
    tx: "56",
    holderPct: "0/1",
    oneMinute: "19%",
    fiveMinute: "13%",
    oneHour: "32%",
    avatar: "RR",
    accent: "orange"
  }
];

const finalStretch: Token[] = [
  {
    id: "vortex",
    name: "Vortex Deployer",
    ticker: "VOR",
    age: "8h",
    creator: "@VortexDeployer",
    marketCap: "$26.8K",
    volume: "$8K",
    tx: "53",
    holderPct: "41/43",
    oneMinute: "19%",
    fiveMinute: "21%",
    oneHour: "74%",
    avatar: "VX",
    accent: "violet"
  },
  {
    id: "penguren",
    name: "PENGUREN penguin pixel art",
    ticker: "PENG",
    age: "6d",
    creator: "@pengurenmemes",
    marketCap: "$21.5K",
    volume: "$10K",
    tx: "2823",
    holderPct: "0/27",
    oneMinute: "66%",
    fiveMinute: "8%",
    oneHour: "64%",
    avatar: "PG",
    accent: "green"
  },
  {
    id: "inu-bank",
    name: "INU Inu Bank",
    ticker: "INU",
    age: "1d",
    creator: "@degenbank",
    marketCap: "$21.1K",
    volume: "$44K",
    tx: "6321",
    holderPct: "0/2",
    oneMinute: "28%",
    fiveMinute: "2%",
    oneHour: "35%",
    avatar: "IB",
    accent: "orange"
  },
  {
    id: "sxrbp",
    name: "$XRBP THE OFFICIAL XRP RIP COIN",
    ticker: "XRBP",
    age: "6d",
    creator: "@xrpwhale",
    marketCap: "$3.64K",
    volume: "$1K",
    tx: "37",
    holderPct: "0/5",
    oneMinute: "72%",
    fiveMinute: "14%",
    oneHour: "72%",
    avatar: "XR",
    accent: "blue"
  },
  {
    id: "lovecoin",
    name: "love lovecoin",
    ticker: "LOVE",
    age: "1h",
    creator: "@gdxp",
    marketCap: "$19.2K",
    volume: "$58K",
    tx: "1247",
    holderPct: "1/24",
    oneMinute: "24%",
    fiveMinute: "2%",
    oneHour: "10%",
    avatar: "LC",
    accent: "violet"
  },
  {
    id: "percsdk",
    name: "PERCSDK Percolator SDK",
    ticker: "SDK",
    age: "2d",
    creator: "@avfx_bags",
    marketCap: "$18K",
    volume: "$195K",
    tx: "4017",
    holderPct: "0/2",
    oneMinute: "30%",
    fiveMinute: "9%",
    oneHour: "2%",
    avatar: "PS",
    accent: "green"
  }
];

const migrated: Token[] = [
  {
    id: "coco",
    name: "Coco The Coco",
    ticker: "COCO",
    age: "2m",
    creator: "@bad_mngr",
    marketCap: "$37.9K",
    volume: "$84K",
    tx: "6900",
    holderPct: "1/1",
    oneMinute: "6%",
    fiveMinute: "29%",
    oneHour: "1%",
    avatar: "CC",
    accent: "orange"
  },
  {
    id: "wtp",
    name: "WTP WhatsThePrompt",
    ticker: "WTP",
    age: "7m",
    creator: "@whatstheprompt",
    marketCap: "$1.76K",
    volume: "$51K",
    tx: "962",
    holderPct: "0/13",
    oneMinute: "10%",
    fiveMinute: "13%",
    oneHour: "1%",
    avatar: "WP",
    accent: "orange"
  },
  {
    id: "uc",
    name: "UC Unacceptable Canadians",
    ticker: "UC",
    age: "10m",
    creator: "@ryangeritsen",
    marketCap: "$35.3K",
    volume: "$244K",
    tx: "5447",
    holderPct: "1/1",
    oneMinute: "19%",
    fiveMinute: "3%",
    oneHour: "8%",
    avatar: "UC",
    accent: "blue"
  },
  {
    id: "dexoecho",
    name: "DEXO DexEcho",
    ticker: "DEXO",
    age: "10m",
    creator: "@DexeEchoSol",
    marketCap: "$14.4K",
    volume: "$82K",
    tx: "1765",
    holderPct: "7/22",
    oneMinute: "18%",
    fiveMinute: "7%",
    oneHour: "17%",
    avatar: "DX",
    accent: "violet"
  },
  {
    id: "todd",
    name: "todd todd",
    ticker: "TODD",
    age: "13m",
    creator: "@todd_tc",
    marketCap: "$4.96K",
    volume: "$121K",
    tx: "4003",
    holderPct: "1/1",
    oneMinute: "23%",
    fiveMinute: "39%",
    oneHour: "4%",
    avatar: "TD",
    accent: "green"
  },
  {
    id: "animals",
    name: "Animals Political Animals",
    ticker: "ANML",
    age: "17m",
    creator: "@xerias_x",
    marketCap: "$4.7M",
    volume: "$208K",
    tx: "4010",
    holderPct: "2/2",
    oneMinute: "2%",
    fiveMinute: "0%",
    oneHour: "24%",
    avatar: "AP",
    accent: "orange"
  }
];

export const marketColumns: MarketColumn[] = [
  {
    id: "new-pairs",
    title: "New Pairs",
    stage: "P1",
    tokens: newPairs
  },
  {
    id: "final-stretch",
    title: "Final Stretch",
    stage: "P2",
    tokens: finalStretch
  },
  {
    id: "migrated",
    title: "Migrated",
    stage: "P3",
    tokens: migrated
  }
];

export const allTokens: Token[] = marketColumns.flatMap((column) => column.tokens);

export function getTokenById(id: string): Token | undefined {
  return allTokens.find((token) => token.id === id);
}
