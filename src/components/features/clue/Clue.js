import React, { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import Card from "choom/lib/components/card/Card";
import Chip from "choom/lib/components/chip/Chip";
import Contain from "choom/lib/components/layout/Contain";
import Divider from "choom/lib/components/divider/Divider";
import Heading from "choom/lib/components/heading/Heading";
import Space from "choom/lib/components/space/Space";

import { Actions } from "../../compositions/actions/Actions";

import {
  setCluePhaseInit,
  setCluePhaseAnswer,
  incrementScore,
  decrementScore,
  setGamePhaseEnd,
  incrementCorrect,
  incrementIncorrect,
  incrementPass,
} from "../../../redux/slices/gameSlice";

import {
  resetClue,
  isLastClueSelector,
} from "../../../redux/slices/cluesSlice";

import { CLUE_PHASE } from "../../../redux/utils";

import audio, { SOUNDS } from "../../../utils/sound";
import vibro, { PATTERN } from "../../../utils/vibration";

import SettingsContext from "../../../context/settings";

import styles from "./clue.module.css";
import { routes } from "../../../routes";

const delay = Number(process.env.NEXT_PUBLIC_YHG_CLUE_TIMER) * 1000;

const Clue = ({ clue, cluePhase }) => {
  if (!clue) return null;

  const router = useRouter();

  const { sound, vibration } = useContext(SettingsContext);
  const [soundOn] = sound;
  const [vibroOn] = vibration;

  const dispatch = useDispatch();
  const isLastClue = useSelector(isLastClueSelector);

  let [timeLeft, setTimeLeft] = useState(delay);
  let [int, setInt] = useState(null);

  useEffect(() => {
    if (int === null) {
      const it = setInterval(() => {
        setTimeLeft((state) => state - 1000);
      }, 1000);

      setInt(it);
    }

    return () => {
      clearInterval(int);
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(int);

      handlePass();
    }
  }, [timeLeft]);

  const gamePhaseOnLastClue = () => {
    if (isLastClue) {
      dispatch(setGamePhaseEnd());
      router.push(routes.END);
    }
  };

  const hapticFeedback = () => {
    if (vibroOn) {
      vibro.play(PATTERN.tap);
    }
  }

  const handleClaimCorrect = () => {
    dispatch(setCluePhaseAnswer());
    clearInterval(int);

    hapticFeedback();
  };

  const handlePass = () => {
    dispatch(setCluePhaseInit());
    dispatch(resetClue());
    dispatch(incrementPass());
    clearInterval(int);

    hapticFeedback();
    gamePhaseOnLastClue();
  };

  const handleConfirmCorrect = () => {
    dispatch(incrementScore({ value: clue.value }));
    dispatch(incrementCorrect());
    dispatch(resetClue());

    gamePhaseOnLastClue();

    if (soundOn) {
      audio.play(SOUNDS.positive);
    }

    if (vibroOn) {
      vibro.play(PATTERN.positive);
    }
  };

  const handleConfirmWrong = () => {
    dispatch(decrementScore({ value: clue.value }));
    dispatch(incrementIncorrect());
    dispatch(resetClue());

    gamePhaseOnLastClue();

    if (soundOn) {
      audio.play(SOUNDS.negative);
    }

    if (vibroOn) {
      vibro.play(PATTERN.negative);
    }
  };

  let content = null;

  if (cluePhase === CLUE_PHASE.active) {
    content = (
      <div>
        <Chip className={styles.timer}>{new Date(timeLeft).getSeconds()}</Chip>
        <Contain space="1" dir="xy">
          {clue.question}
          <Space size="1" />
          <Actions
            primary="I know"
            secondary="I pass"
            onPrimary={handleClaimCorrect}
            onSecondary={handlePass}
          />
        </Contain>
      </div>
    );
  }

  if (cluePhase === CLUE_PHASE.answer) {
    content = (
      <div>
        <Contain space="1" dir="xy">
          <Heading as="div" level="5" colorInherit>
            Correct Answer:
          </Heading>
          <Divider />
          {clue.answer}
          <Space size="1" />
          <Actions
            primary="Correct!"
            secondary="Hmm..."
            onPrimary={handleConfirmCorrect}
            onSecondary={handleConfirmWrong}
          />
        </Contain>
      </div>
    );
  }

  return (
    <Card align="center" padding="1" className={styles.root}>
      {content}
    </Card>
  );
};

export { Clue };
