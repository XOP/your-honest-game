import React from "react";
import { useSelector } from "react-redux";

import Support from "choom/lib/components/layout/Support";
import FlexUnit from "choom/lib/components/layout/FlexUnit";

import { Toolbar } from "../toolbar/Toolbar";

import { gamePhaseSelector } from "../../../redux/slices/gameSlice";
import { GAME_PHASE } from "../../../redux/utils";

const Page = ({ children }) => {
  const gamePhase = useSelector(gamePhaseSelector);
  const isInit = gamePhase === GAME_PHASE.init;

  return (
    <Support as="main">
      <Support>{children}</Support>

      {!isInit && (
        <FlexUnit basis="20vh" grow="0">
          <Toolbar />
        </FlexUnit>
      )}
    </Support>
  );
};

export { Page };
