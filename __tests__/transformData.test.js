import { transformData } from "../pages/api/categories";

const cluesMinimal = [
  {
    id: 1,
    question: "q1",
    answer: "a1",
    value: 100,
  },
  {
    id: 2,
    question: "q2",
    answer: "a2",
    value: 200,
  },
  {
    id: 3,
    question: "q3",
    answer: "a3",
    value: 300,
  },
  {
    id: 4,
    question: "q4",
    answer: "a4",
    value: 400,
  },
  {
    id: 5,
    question: "q5",
    answer: "a5",
    value: 500,
  },
];

const cluesExtra = [
  {
    id: 1,
    question: "q1",
    answer: "a1",
    value: 100,
  },
  {
    id: 2,
    question: "q2",
    answer: "a2",
    value: 200,
  },
  {
    id: 3,
    question: "q3",
    answer: "a3",
    value: 300,
  },
  {
    id: 4,
    question: "q4",
    answer: "a4",
    value: 400,
  },
  {
    id: 5,
    question: "q5",
    answer: "a5",
    value: 500,
  },
  {
    id: 6,
    question: "q6",
    answer: "a6",
    value: 100,
  },
  {
    id: 7,
    question: "q7",
    answer: "a7",
    value: 200,
  },
  {
    id: 8,
    question: "q8",
    answer: "a8",
    value: 300,
  },
  {
    id: 9,
    question: "q9",
    answer: "a9",
    value: 400,
  },
  {
    id: 10,
    question: "q10",
    answer: "a10",
    value: 500,
  },
];

const dataMinimal = [
  {
    id: 100,
    title: "cat100",
    clues: cluesMinimal,
    clues_count: 5,
  },
];

const dataMinimalExtra = [
  {
    id: 100,
    title: "cat100",
    clues: cluesExtra,
    clues_count: 10,
  },
];

const dataFull = [
  {
    id: 100,
    title: "cat100",
    clues: cluesMinimal,
    clues_count: 5,
  },
  {
    id: 200,
    title: "cat200",
    clues: cluesExtra,
    clues_count: 10,
  },
  {
    id: 300,
    title: "cat300",
    clues: cluesExtra,
    clues_count: 10,
  },
];

describe("minimal data", () => {
  let o, cat, clues, _keys, clue;

  it("returns array", () => {
    o = transformData(dataMinimal);
    expect(o).toBeInstanceOf(Array);
    expect(o).toHaveLength(1);
  });

  describe("object validation", () => {
    it("contains proper object", () => {
      cat = o[0];
      expect(cat).toHaveProperty("id", 100);
      expect(cat).toHaveProperty("title", "cat100");
      expect(cat).not.toHaveProperty("clues_count");
      expect(cat).toHaveProperty("clues");
    });

    it("has clues", () => {
      clues = cat.clues;
      expect(clues).toBeInstanceOf(Object);
      expect(clues).not.toBeInstanceOf(Array);
    });

    it("has keys from 100 to 500", () => {
      _keys = Object.keys(clues);
      expect(_keys).toHaveLength(5);
      expect(_keys).toEqual(
        expect.arrayContaining(["100", "200", "300", "400", "500"])
      );
    });

    it("has object under key 100", () => {
      expect(clues["100"]).toBeInstanceOf(Object);
    });

    it("has object under key 500", () => {
      expect(clues["500"]).toBeInstanceOf(Object);
    });

    describe("clue object validation", () => {
      it("matches schema", () => {
        clue = clues["300"];

        expect(clue).toBeInstanceOf(Object);

        expect(clue).toMatchObject({
          question: "q3",
          answer: "a3",
          activated: false,
        });
      });
    });
  });
});

describe("minimal data with extra clues", () => {
  let o, cat, clues, _keys, clue;

  it("returns array", () => {
    o = transformData(dataMinimalExtra);
    expect(o).toBeInstanceOf(Array);
    expect(o).toHaveLength(1);
  });

  describe("object validation", () => {
    it("contains proper object", () => {
      cat = o[0];
      expect(cat).toHaveProperty("id", 100);
      expect(cat).toHaveProperty("title", "cat100");
      expect(cat).not.toHaveProperty("clues_count");
      expect(cat).toHaveProperty("clues");
    });

    it("has clues", () => {
      clues = cat.clues;
      expect(clues).toBeInstanceOf(Object);
      expect(clues).not.toBeInstanceOf(Array);
    });

    it("has keys from 100 to 500", () => {
      _keys = Object.keys(clues);
      expect(_keys).toHaveLength(5);
      expect(_keys).toEqual(
        expect.arrayContaining(["100", "200", "300", "400", "500"])
      );
    });

    it("has object under key 100", () => {
      expect(clues["100"]).toBeInstanceOf(Object);
    });

    it("has object under key 500", () => {
      expect(clues["500"]).toBeInstanceOf(Object);
    });

    describe("clue object validation", () => {
      it("matches schema", () => {
        clue = clues["300"];

        expect(clue).toBeInstanceOf(Object);

        expect(clue).toMatchObject({
          question: "q3",
          answer: "a3",
          activated: false,
        });
      });
    });
  });
});

describe("regular data with various clues number", () => {
  let o, cat, clues, _keys, clue;

  it("returns array", () => {
    o = transformData(dataFull);
    expect(o).toBeInstanceOf(Array);
    expect(o).toHaveLength(3);
  });

  describe("object validation", () => {
    it("contains proper object", () => {
      cat = o[0];
      expect(cat).toHaveProperty("id", 100);
      expect(cat).toHaveProperty("title", "cat100");
      expect(cat).not.toHaveProperty("clues_count");
      expect(cat).toHaveProperty("clues");
    });

    it("has clues", () => {
      clues = cat.clues;
      expect(clues).toBeInstanceOf(Object);
      expect(clues).not.toBeInstanceOf(Array);
    });

    it("has keys from 100 to 500", () => {
      _keys = Object.keys(clues);
      expect(_keys).toHaveLength(5);
      expect(_keys).toEqual(
        expect.arrayContaining(["100", "200", "300", "400", "500"])
      );
    });

    it("has object under key 100", () => {
      expect(clues["100"]).toBeInstanceOf(Object);
    });

    it("has object under key 500", () => {
      expect(clues["500"]).toBeInstanceOf(Object);
    });

    describe("clue object validation", () => {
      it("matches schema", () => {
        clue = clues["300"];

        expect(clue).toBeInstanceOf(Object);

        expect(clue).toMatchObject({
          question: "q3",
          answer: "a3",
          activated: false,
        });
      });
    });
  });
});
