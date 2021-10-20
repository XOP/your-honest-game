import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "choom/lib/components/card/Card";
import Stack from "choom/lib/components/layout/Stack";
import Contain from "choom/lib/components/layout/Contain";

import { Screen } from "../../src/components/compositions/screen/Screen";
import { Category } from "../../src/components/compositions/category/Category";
import { Clue } from "../../src/components/features/clue/Clue";

import { mockClues } from "../../src/redux/utils";

import {
  fetchClues,
  activateClue,
  cluesSelector,
  activeClueSelector,
} from "../../src/redux/slices/cluesSlice";

import {
  cluePhaseSelector,
  setGamePhaseRound,
  setCluePhaseActive,
} from "../../src/redux/slices/gameSlice";

export default function Game({ categories: mockCategories }) {
  const categories = useSelector(cluesSelector);
  const active = useSelector(activeClueSelector);
  const cluePhase = useSelector(cluePhaseSelector);

  const dispatch = useDispatch();

  const onClueClick = ({ id, value }) => {
    dispatch(activateClue({ id, value }));
    dispatch(setCluePhaseActive());
  };

  //// TODO: remove; data is fetched on intro page
  useEffect(() => {
    dispatch(fetchClues());
    dispatch(setGamePhaseRound());
  }, []);

  return (
    <Contain space="1" dir="x">
      <Screen>
        {!!categories.length && (
          <Stack as="section" dir="y" space="0.5">
            {categories.map((cat) => (
              <Category key={cat.id} {...cat} onItemClick={onClueClick} />
            ))}
          </Stack>
        )}
        {active && <Clue clue={active.clue} cluePhase={cluePhase} />}
      </Screen>
    </Contain>
  );
}

export function getServerSideProps() {
  return {
    props: {
      categories: process.env.NODE_ENV === "development" ? mockClues : [],
    },
  };
}
