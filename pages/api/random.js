import nc from "next-connect";
import axios from "axios";

export const getRandomClue = async () => {
  const response = await axios.get(process.env.NEXT_PUBLIC_YHG_RANDOM_EP);
  const data = await response.data;

  return data[0];
};

const handler = nc().get(async (req, res) => {
  const clue = await getRandomClue();

  if (clue) {
    res.json(clue);
  } else {
    throw new Error("API <random> request failed", err);
  }
});

export default handler;
