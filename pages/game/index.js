import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import Card from "choom/lib/components/card/Card";
import Button from "choom/lib/components/button/Button";
import Flow from "choom/lib/components/layout/Flow";
import Stack from "choom/lib/components/layout/Stack";
import Contain from "choom/lib/components/layout/Contain";

import { Category } from "../../src/components/compositions/category/Category";

import { mockClues } from "../../src/redux/utils";

import {
  fetchClues,
  activateClue,
  cluesSelector,
  activeClueSelector,
} from "../../src/redux/slices/cluesSlice";

import {
  cluePhaseSelector,
  setCluePhaseActive,
  setGamePhaseRound,
} from "../../src/redux/slices/gameSlice";
import { Actions } from "../../src/components/compositions/actions/Actions";
import { Clue } from "../../src/components/features/clue/Clue";

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
    <Contain space="2" dir="x">
      <Clue clue={active?.clue} cluePhase={cluePhase} />
      <Card padding="1">
        {!!categories.length && (
          <Stack as="section" dir="y" space="0.5">
            {categories.map((cat) => (
              <Category key={cat.id} {...cat} onItemClick={onClueClick} />
            ))}
          </Stack>
        )}
      </Card>
    </Contain>
  );
}

export function getServerSideProps() {
  return {
    props: {
      categories: mockClues
    },
  };
}
