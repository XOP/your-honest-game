import nc from "next-connect";
import axios from "axios";
import shuffle from "array-shuffle";

import { mockData } from "../../src/redux/utils";

const catLimit = process.env.NEXT_PUBLIC_YHG_CATEGORY_LIMIT;

const handler = nc().get(async (req, res) => {
  const selectedIds = shuffle(
    process.env.NEXT_PUBLIC_YHG_CATEGORY_IDS.split(" ")
  ).slice(0, catLimit);

  try {
    //   const dataPending = selectedIds.map((id) =>
    //     axios
    //       .get(process.env.NEXT_PUBLIC_YHG_CATEGORY_EP, { params: { id } })
    //       .then((res) => res.data)
    //   );

    //   const data = await Promise.all(dataPending);

    const data = await new Promise((resolve) =>
      setTimeout(() => {
        resolve(mockData);
      }, 500)
    );

    res.json(transformData(data));
  } catch (err) {
    throw new Error("API <categories> request failed", err);
  }
});

/**
 * randomFromArray
 * @param {Array} arr
 * @returns {*}
 */
function randomFromArray(arr) {
  const max = arr.length - 1;
  const idx = Math.round(Math.random() * max);

  return arr[idx];
}

/*
  > input schema:
  --------------
  {
    id: int
    title: string
    clues: [
      {
        id: int
        question: string
        answer: string
        value: int
      }
    ]
    clues_count: int
  }

  < output schema:
  ---------------
  {
    id: int
    title: string
    clues: {
      100, 200, .. 500: {
        question: string
        answer: string
        activated: bool
      }
    }
  }
*/

/**
 * transformData
 * @param {Array} data
 * @returns {Object}
 */
function transformData(data) {
  return data.map((cat) => {
    const { id, title, clues, clues_count: count } = cat;
    let _clues = clues;

    // select random clues for all values
    if (count > 5) {
      _clues = _clues.filter((c) => {
        return !!c.answer && !!c.question && !!c.value;
      });

      const _tmp_clues = [];

      for (let v = 100; v <= 500; v += 100) {
        _tmp_clues.push(randomFromArray(_clues.filter((c) => +c.value === v)));
      }

      _clues = [..._tmp_clues];
    }

    // convert array to obj
    _clues = _clues.reduce((acc, cur) => {
      acc[cur.value] = {
        question: cur.question,
        answer: cur.answer,
        activated: false,
      };

      return acc;
    }, {});

    return {
      id,
      title,
      clues: _clues,
    };
  });
}

export { transformData };
export default handler;
