import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { Settings, Star, Loader } from "react-feather";

import Button from "choom/lib/components/button/Button";
import Heading from "choom/lib/components/heading/Heading";
import Hold from "choom/lib/components/layout/Hold";
import Flow from "choom/lib/components/layout/Flow";
import Icon from "choom/lib/components/icon/Icon";

import { statusSelector, fetchClues } from "../src/redux/slices/cluesSlice";
import { setGamePhaseRound } from "../src/redux/slices/gameSlice";

import { STATUS } from "../src/redux/utils";
import { routes } from "../src/routes";

export default function Intro() {
  const dispatch = useDispatch();
  const router = useRouter();

  const status = useSelector(statusSelector);

  const handleGameStart = () => {
    dispatch(fetchClues());
  };

  const handleSettings = () => {
    router.push(routes.SETTINGS);
  };

  const isLoading = status === STATUS.loading;

  useEffect(() => {
    if (status === STATUS.idle) {
      dispatch(setGamePhaseRound());
      router.push(routes.GAME);
    }
  }, [status]);

  return (
    <div>
      <Heading level="2" as="h1">
        Your honest game
      </Heading>

      <br />

      <Hold>
        <Flow>
          <Button
            onClick={handleGameStart}
            size="big"
            isIcon
            disabled={isLoading}
          >
            <Icon size="inherit">{isLoading ? <Loader /> : <Star />}</Icon>
          </Button>

          <Button
            size="big"
            isIcon
            disabled={isLoading}
            onClick={handleSettings}
          >
            <Icon size="inherit">
              <Settings />
            </Icon>
          </Button>
        </Flow>
      </Hold>
    </div>
  );
}
