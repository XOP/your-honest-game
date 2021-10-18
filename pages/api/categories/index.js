import nc from "next-connect";
import axios from "axios";
import shuffle from "array-shuffle";

const catLimit = process.env.NEXT_PUBLIC_YHG_CATEGORY_LIMIT;

const handler = nc({ attachParams: true }).get(async (req, res) => {
  const selectedIds = shuffle(
    process.env.NEXT_PUBLIC_YHG_CATEGORY_IDS.split(" ")
  ).slice(0, catLimit);

  try {
    const dataPending = selectedIds.map((id) =>
      axios
        .get(process.env.NEXT_PUBLIC_YHG_CATEGORY_EP, { params: { id } })
        .then((res) => res.data)
    );

    const data = await Promise.all(dataPending);

    res.json(data);
  } catch (err) {
    throw new Error("API request failed", err);
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

export default handler;