export const STATUS = {
  init: "init",
  idle: "idle",
  loading: "loading",
  error: "error",
};

export const GAME_PHASE = {
  init: "init",
  ready: "ready",
  round: "round",
  end: "end",
};

export const CLUE_PHASE = {
  init: "init",
  active: "active",
  answer: "answer",
};

export const mockData = [
  {
    id: 59,
    title: "UNEEQ",
    clues_count: 5,
    clues: [
      {
        value: 100,
        question: "esse occaecat laboris enim incididunt proident duis magna",
        answer: "esse ipsum veniam",
      },
      {
        value: 200,
        question: "Lorem ea voluptate sit id minim adipisicing duis",
        answer: "aute consequat ullamco",
      },
      {
        value: 300,
        question: "cupidatat tempor eu excepteur labore dolor ipsum mollit",
        answer: "sunt sint ullamco",
      },
      {
        value: 400,
        question: "labore incididunt irure adipisicing aliquip aute qui mollit",
        answer: "nulla fugiat id",
      },
      {
        value: 500,
        question:
          "cupidatat tempor sint Lorem laborum officia exercitation qui",
        answer: "duis consectetur et",
      },
    ],
  },
  {
    id: 13,
    title: "DIGIQUE",
    clues_count: 5,
    clues: [
      {
        value: 100,
        question: "sunt exercitation nisi dolore sunt id commodo sit",
        answer: "magna voluptate esse",
      },
      {
        value: 200,
        question: "aute ad in et nostrud officia id do",
        answer: "velit elit veniam",
      },
      {
        value: 300,
        question:
          "velit nisi veniam labore consectetur laborum ullamco nostrud",
        answer: "eu exercitation est",
      },
      {
        value: 400,
        question: "ea consectetur Lorem anim proident excepteur culpa nulla",
        answer: "cupidatat nulla exercitation",
      },
      {
        value: 500,
        question: "est Lorem ut ipsum sunt eiusmod occaecat amet",
        answer: "anim incididunt non",
      },
    ],
  },
  {
    id: 21,
    title: "SKYPLEX",
    clues_count: 5,
    clues: [
      {
        value: 100,
        question: "deserunt tempor incididunt laboris labore elit eu velit",
        answer: "duis ad elit",
      },
      {
        value: 200,
        question: "nulla deserunt nisi ex est veniam eiusmod tempor",
        answer: "irure consectetur eiusmod",
      },
      {
        value: 300,
        question: "occaecat amet ea elit consectetur occaecat veniam tempor",
        answer: "quis anim id",
      },
      {
        value: 400,
        question: "magna occaecat qui officia sunt mollit ut sunt",
        answer: "est sint reprehenderit",
      },
      {
        value: 500,
        question: "officia adipisicing ea duis ad do do amet",
        answer: "nostrud veniam ad",
      },
    ],
  },
  {
    id: 509,
    title: "XINWARE",
    clues_count: 5,
    clues: [
      {
        value: 100,
        question: "esse eu ex quis minim consectetur cillum culpa",
        answer: "incididunt sit sint",
      },
      {
        value: 200,
        question: "magna ex non adipisicing ad adipisicing nisi consectetur",
        answer: "eu qui ea",
      },
      {
        value: 300,
        question: "nulla cillum minim eu ut sunt mollit consequat",
        answer: "ad in commodo",
      },
      {
        value: 400,
        question: "elit tempor commodo proident in velit ea nisi",
        answer: "non velit id",
      },
      {
        value: 500,
        question: "dolor exercitation nisi irure magna dolor labore eiusmod",
        answer: "esse tempor ad",
      },
    ],
  },
  {
    id: 423,
    title: "MINGA",
    clues_count: 5,
    clues: [
      {
        value: 100,
        question:
          "cupidatat minim laboris duis irure reprehenderit dolore ullamco",
        answer: "proident exercitation commodo",
      },
      {
        value: 200,
        question: "ex incididunt pariatur labore irure aliquip et consequat",
        answer: "incididunt est adipisicing",
      },
      {
        value: 300,
        question: "velit minim cupidatat Lorem deserunt officia tempor sunt",
        answer: "magna aliqua reprehenderit",
      },
      {
        value: 400,
        question:
          "aliquip occaecat excepteur adipisicing adipisicing cupidatat ad ex",
        answer: "voluptate nisi dolore",
      },
      {
        value: 500,
        question: "laborum voluptate id irure mollit nostrud sit nostrud",
        answer: "deserunt laborum esse",
      },
    ],
  },
  {
    id: 42,
    title: "EXERTA",
    clues_count: 5,
    clues: [
      {
        value: 100,
        question:
          "eiusmod cupidatat laboris velit reprehenderit sint incididunt reprehenderit",
        answer: "aliquip minim ex",
      },
      {
        value: 200,
        question: "nostrud id ut consequat commodo non ad magna",
        answer: "officia adipisicing excepteur",
      },
      {
        value: 300,
        question: "cillum ut dolore sit laborum ea pariatur esse",
        answer: "tempor enim occaecat",
      },
      {
        value: 400,
        question: "Lorem sunt enim reprehenderit reprehenderit magna non qui",
        answer: "minim est consequat",
      },
      {
        value: 500,
        question:
          "excepteur labore nostrud minim Lorem nostrud adipisicing duis",
        answer: "excepteur qui enim",
      },
    ],
  },
];

export const mockClues = [
  {
    id: 59,
    title: "UNEEQ",
    clues: {
      100: {
        question: "esse occaecat laboris enim incididunt proident duis magna",
        answer: "esse ipsum veniam",
        activated: false,
      },
      200: {
        question: "Lorem ea voluptate sit id minim adipisicing duis",
        answer: "aute consequat ullamco",
        activated: false,
      },
      300: {
        question: "cupidatat tempor eu excepteur labore dolor ipsum mollit",
        answer: "sunt sint ullamco",
        activated: false,
      },
      400: {
        question: "labore incididunt irure adipisicing aliquip aute qui mollit",
        answer: "nulla fugiat id",
        activated: false,
      },
      500: {
        question:
          "cupidatat tempor sint Lorem laborum officia exercitation qui",
        answer: "duis consectetur et",
        activated: false,
      },
    },
  },
  {
    id: 13,
    title: "DIGIQUE",
    clues: {
      100: {
        question: "sunt exercitation nisi dolore sunt id commodo sit",
        answer: "magna voluptate esse",
        activated: false,
      },
      200: {
        question: "aute ad in et nostrud officia id do",
        answer: "velit elit veniam",
        activated: false,
      },
      300: {
        question:
          "velit nisi veniam labore consectetur laborum ullamco nostrud",
        answer: "eu exercitation est",
        activated: false,
      },
      400: {
        question: "ea consectetur Lorem anim proident excepteur culpa nulla",
        answer: "cupidatat nulla exercitation",
        activated: false,
      },
      500: {
        question: "est Lorem ut ipsum sunt eiusmod occaecat amet",
        answer: "anim incididunt non",
        activated: false,
      },
    },
  },
  {
    id: 21,
    title: "SKYPLEX",
    clues: {
      100: {
        question: "deserunt tempor incididunt laboris labore elit eu velit",
        answer: "duis ad elit",
        activated: false,
      },
      200: {
        question: "nulla deserunt nisi ex est veniam eiusmod tempor",
        answer: "irure consectetur eiusmod",
        activated: false,
      },
      300: {
        question: "occaecat amet ea elit consectetur occaecat veniam tempor",
        answer: "quis anim id",
        activated: false,
      },
      400: {
        question: "magna occaecat qui officia sunt mollit ut sunt",
        answer: "est sint reprehenderit",
        activated: false,
      },
      500: {
        question: "officia adipisicing ea duis ad do do amet",
        answer: "nostrud veniam ad",
        activated: false,
      },
    },
  },
  {
    id: 509,
    title: "XINWARE",
    clues: {
      100: {
        question: "esse eu ex quis minim consectetur cillum culpa",
        answer: "incididunt sit sint",
        activated: false,
      },
      200: {
        question: "magna ex non adipisicing ad adipisicing nisi consectetur",
        answer: "eu qui ea",
        activated: false,
      },
      300: {
        question: "nulla cillum minim eu ut sunt mollit consequat",
        answer: "ad in commodo",
        activated: false,
      },
      400: {
        question: "elit tempor commodo proident in velit ea nisi",
        answer: "non velit id",
        activated: false,
      },
      500: {
        question: "dolor exercitation nisi irure magna dolor labore eiusmod",
        answer: "esse tempor ad",
        activated: false,
      },
    },
  },
  {
    id: 423,
    title: "MINGA",
    clues: {
      100: {
        question:
          "cupidatat minim laboris duis irure reprehenderit dolore ullamco",
        answer: "proident exercitation commodo",
        activated: false,
      },
      200: {
        question: "ex incididunt pariatur labore irure aliquip et consequat",
        answer: "incididunt est adipisicing",
        activated: false,
      },
      300: {
        question: "velit minim cupidatat Lorem deserunt officia tempor sunt",
        answer: "magna aliqua reprehenderit",
        activated: false,
      },
      400: {
        question:
          "aliquip occaecat excepteur adipisicing adipisicing cupidatat ad ex",
        answer: "voluptate nisi dolore",
        activated: false,
      },
      500: {
        question: "laborum voluptate id irure mollit nostrud sit nostrud",
        answer: "deserunt laborum esse",
        activated: false,
      },
    },
  },
  {
    id: 42,
    title: "EXERTA",
    clues: {
      100: {
        question:
          "eiusmod cupidatat laboris velit reprehenderit sint incididunt reprehenderit",
        answer: "aliquip minim ex",
        activated: false,
      },
      200: {
        question: "nostrud id ut consequat commodo non ad magna",
        answer: "officia adipisicing excepteur",
        activated: false,
      },
      300: {
        question: "cillum ut dolore sit laborum ea pariatur esse",
        answer: "tempor enim occaecat",
        activated: false,
      },
      400: {
        question: "Lorem sunt enim reprehenderit reprehenderit magna non qui",
        answer: "minim est consequat",
        activated: false,
      },
      500: {
        question:
          "excepteur labore nostrud minim Lorem nostrud adipisicing duis",
        answer: "excepteur qui enim",
        activated: false,
      },
    },
  },
];
