import React, { useEffect, useContext, useRef } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Script from "next/script";

import { DollarSign, CheckCircle, Slash, FastForward } from "react-feather";

import Contain from "choom/lib/components/layout/Contain";
import Divider from "choom/lib/components/divider/Divider";
import Flex from "choom/lib/components/layout/Flex";
import Heading from "choom/lib/components/heading/Heading";
import Stack from "choom/lib/components/layout/Stack";

import { Result } from "../../src/components/compositions/result/Result";
import { Screen } from "../../src/components/compositions/screen/Screen";

import {
  scoreSelector,
  gamePhaseSelector,
  correctSelector,
  incorrectSelector,
  passSelector,
} from "../../src/redux/slices/gameSlice";

import { GAME_PHASE } from "../../src/redux/utils";

import audio, { SOUNDS } from "../../src/utils/sound";

import SettingsContext from "../../src/context/settings";

export default function Game() {
  const score = useSelector(scoreSelector);
  const correct = useSelector(correctSelector);
  const incorrect = useSelector(incorrectSelector);
  const pass = useSelector(passSelector);
  const gamePhase = useSelector(gamePhaseSelector);

  const partyRef = useRef();

  const router = useRouter();

  const { sound } = useContext(SettingsContext);
  const [soundOn] = sound;

  useEffect(() => {
    if (gamePhase !== GAME_PHASE.end) {
      router.back();

      return false;
    }

    if (soundOn) {
      if (score > 0) {
        audio.play(SOUNDS.win);
      } else {
        audio.play(SOUNDS.lose);
      }
    }
  }, []);

  return (
    <Contain space="2" dir="x">
      <Screen>
        <Flex fluid dir="column" space="0">
          <Heading level="4" as="h1" colorInherit>
            <small>This was...</small>
            <br />
            <span ref={partyRef}>your honest game!</span>
          </Heading>

          <Divider mt="1.5" mb="1.5" />

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
        </Flex>
      </Screen>
      <Script
        id="party-js"
        src="https://cdn.jsdelivr.net/npm/party-js@latest/bundle/party.min.js"
        onLoad={() => {
          if (score > 0) {
            party.settings.gravity = 500; 
            party.confetti(partyRef.current, {
              count: party.variation.range(50, 80),
              size: party.variation.range(0.6, 0.8)
            });
          }
        }}
      />
    </Contain>
  );
}

export function getServerSideProps() {
  return {
    props: {},
  };
}
