import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DollarSign, CheckCircle, Slash, FastForward } from "react-feather";

import Card from "choom/lib/components/card/Card";
import Stack from "choom/lib/components/layout/Stack";
import Contain from "choom/lib/components/layout/Contain";
import Heading from "choom/lib/components/heading/Heading";

import { Result } from "../../src/components/compositions/result/Result";

import {
  scoreSelector,
  setGamePhaseEnd,
  correctSelector,
  incorrectSelector,
  passSelector,
} from "../../src/redux/slices/gameSlice";

export default function Game() {
  const score = useSelector(scoreSelector);
  const correct = useSelector(correctSelector);
  const incorrect = useSelector(incorrectSelector);
  const pass = useSelector(passSelector);

  const dispatch = useDispatch();

  //// TODO: remove; this is set in round phase
  useEffect(() => {
    dispatch(setGamePhaseEnd());
  }, []);

  return (
    <Contain space="2" dir="x">
      <Card padding="1">
        <Heading level="4" as="h1" colorInherit mb="2">
          <small>This was...</small>
          <br />
          your honest game!
        </Heading>

        <Stack as="section" dir="y" space="0.75">
          <Result value={score} iconSvg={<DollarSign />}>
            Total score
          </Result>
          <Result value={correct} iconSvg={<CheckCircle />}>
            Correct answers
          </Result>
          <Result value={incorrect} iconSvg={<Slash />}>
            Wrong answers
          </Result>
          <Result value={pass} iconSvg={<FastForward />}>
            Passed
          </Result>
        </Stack>
      </Card>
    </Contain>
  );
}

export function getServerSideProps() {
  return {
    props: {},
  };
}
