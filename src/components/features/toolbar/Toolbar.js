import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import Button from "choom/lib/components/button/Button";
import Card from "choom/lib/components/card/Card";
import Flex from "choom/lib/components/layout/Flex";
import FlexUnit from "choom/lib/components/layout/FlexUnit";
import Flow from "choom/lib/components/layout/Flow";
import Heading from "choom/lib/components/heading/Heading";
import Icon from "choom/lib/components/icon/Icon";
import Panel from "choom/lib/components/panel/Panel";

import { ArrowLeft, RefreshCcw, Settings } from "react-feather";

import {
  scoreSelector,
  setGamePhaseInit,
  gamePhaseSelector,
} from "../../../redux/slices/gameSlice";
import { GAME_PHASE } from "../../../redux/utils";

import { routes } from "../../../routes";

import styles from "./toolbar.module.css";

const Toolbar = () => {
  const score = useSelector(scoreSelector);
  const phase = useSelector(gamePhaseSelector);

  const router = useRouter();
  const route = router.route;

  const isGame = phase === GAME_PHASE.round;
  const isGameRoom = route === routes.GAME || route === routes.END;
  const isSettingsRoom = route === routes.SETTINGS;

  const dispatch = useDispatch();

  const handleRestart = () => {
    router.push(routes.START);
    dispatch(setGamePhaseInit());
  };

  const handleSettings = () => {
    router.push(routes.SETTINGS);
  };

  const handleBackToGame = () => {
    router.back();
  };

  return (
    <Panel placement="bottom" position="fixed" padding="1">
      <Flex dir="row" fluid align="center" justify="center">
        <FlexUnit basis="30%">
          <Flow as="nav" space="1">
            {isGameRoom ? (
              <Button isIcon onClick={handleRestart}>
                <Icon size="inherit">
                  <RefreshCcw />
                </Icon>
              </Button>
            ) : (
              <Button isIcon onClick={handleBackToGame}>
                <Icon size="inherit">
                  <ArrowLeft />
                </Icon>
              </Button>
            )}
          </Flow>
        </FlexUnit>
        <FlexUnit basis="40%">
          {isGame && (
            <Card padding="1" className={styles.score}>
              <Heading
                align="center"
                level="2"
                as="div"
                colorInherit
                className={styles.value}
              >
                {score}
              </Heading>
            </Card>
          )}
        </FlexUnit>
        <FlexUnit basis="30%">
          <Flow as="nav" space="1">
            <Button isIcon onClick={handleSettings} disabled={isSettingsRoom}>
              <Icon size="inherit">
                <Settings />
              </Icon>
            </Button>
          </Flow>
        </FlexUnit>
      </Flex>
    </Panel>
  );
};

export { Toolbar };
