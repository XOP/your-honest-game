import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "choom/lib/components/card/Card";
import Contain from "choom/lib/components/layout/Contain";
import Divider from "choom/lib/components/divider/Divider";
import Heading from "choom/lib/components/heading/Heading";

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

import styles from "./clue.module.css";

const Clue = ({ clue, cluePhase }) => {
  if (!clue) return null;

  const dispatch = useDispatch();
  const isLastClue = useSelector(isLastClueSelector);

  const gamePhaseOnLastClue = () => {
    if (isLastClue) {
      dispatch(setGamePhaseEnd());
    }
  };

  const handleClaimCorrect = () => {
    dispatch(setCluePhaseAnswer());
  };

  const handlePass = () => {
    dispatch(setCluePhaseInit());
    dispatch(resetClue());
    dispatch(incrementPass());

    gamePhaseOnLastClue();
  };

  const handleConfirmCorrect = () => {
    dispatch(incrementScore({ value: clue.value }));
    dispatch(incrementCorrect());
    dispatch(resetClue());

    gamePhaseOnLastClue();
  };

  const handleConfirmWrong = () => {
    dispatch(decrementScore({ value: clue.value }));
    dispatch(incrementIncorrect());
    dispatch(resetClue());

    gamePhaseOnLastClue();
  };

  let content = null;

  if (cluePhase === CLUE_PHASE.active) {
    content = (
      <div>
        <Contain space="1" dir="xy">
          {clue.question}
        </Contain>
        <Actions
          primary="I know"
          secondary="I pass"
          onPrimary={handleClaimCorrect}
          onSecondary={handlePass}
        />
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
        </Contain>
        <Actions
          primary="Correct!"
          secondary="Hmm..."
          onPrimary={handleConfirmCorrect}
          onSecondary={handleConfirmWrong}
        />
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
