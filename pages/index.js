import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { Settings, Star, Loader } from "react-feather";

import Button from "choom/lib/components/button/Button";
import Heading from "choom/lib/components/heading/Heading";
import Flex from "choom/lib/components/layout/Flex";
import Flow from "choom/lib/components/layout/Flow";
import Icon from "choom/lib/components/icon/Icon";

import { statusSelector, fetchClues } from "../src/redux/slices/cluesSlice";
import {
  gamePhaseSelector,
  setGamePhaseReady,
  setGamePhaseRound,
} from "../src/redux/slices/gameSlice";

import { GAME_PHASE, STATUS } from "../src/redux/utils";
import { routes } from "../src/routes";

export default function Intro() {
  const dispatch = useDispatch();
  const router = useRouter();

  const gamePhase = useSelector(gamePhaseSelector);
  const status = useSelector(statusSelector);

  const handleGameStart = () => {
    dispatch(fetchClues());
    dispatch(setGamePhaseReady());
  };

  const handleSettings = () => {
    router.push(routes.SETTINGS);
  };

  const isLoading = status === STATUS.loading || gamePhase === GAME_PHASE.ready;

  useEffect(() => {
    if (gamePhase === GAME_PHASE.ready && status === STATUS.idle) {
      router.push(routes.GAME);
      dispatch(setGamePhaseRound());
    }
  }, [status]);

  return (
    <Flex space="2" fluid dir="column">
      <Heading level="2" as="h1">
        Your honest game
      </Heading>

      <Flow>
        <Button
          onClick={handleGameStart}
          size="big"
          isIcon
          disabled={isLoading}
        >
          <Icon size="inherit">{isLoading ? <Loader /> : <Star />}</Icon>
        </Button>

        <Button size="big" isIcon disabled={isLoading} onClick={handleSettings}>
          <Icon size="inherit">
            <Settings />
          </Icon>
        </Button>
      </Flow>
    </Flex>
  );
}
