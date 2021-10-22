import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import Stack from "choom/lib/components/layout/Stack";
import Contain from "choom/lib/components/layout/Contain";

import { Screen } from "../../src/components/compositions/screen/Screen";
import { Category } from "../../src/components/compositions/category/Category";
import { Clue } from "../../src/components/features/clue/Clue";

import { mockClues, GAME_PHASE } from "../../src/redux/utils";

import {
  activateClue,
  cluesSelector,
  activeClueSelector,
} from "../../src/redux/slices/cluesSlice";

import {
  cluePhaseSelector,
  gamePhaseSelector,
  setCluePhaseActive,
} from "../../src/redux/slices/gameSlice";

import audio, { SOUNDS } from "../../src/utils/sound";
import vibro, { PATTERN } from "../../src/utils/vibration";

import SettingsContext from "../../src/context/settings";
import { routes } from "../../src/routes";

export default function Game({ categories: mockCategories }) {
  const categories = useSelector(cluesSelector);
  const active = useSelector(activeClueSelector);
  const cluePhase = useSelector(cluePhaseSelector);
  const gamePhase = useSelector(gamePhaseSelector);
  const router = useRouter();

  const { sound, vibration } = useContext(SettingsContext);
  const [soundOn] = sound;
  const [vibroOn] = vibration;

  const dispatch = useDispatch();

  const onClueClick = ({ id, value }) => {
    dispatch(activateClue({ id, value }));
    dispatch(setCluePhaseActive());

    if (soundOn) {
      audio.play(SOUNDS.next);
    }

    if (vibroOn) {
      vibro.play(PATTERN.tap);
    }
  };

  useEffect(() => {
    if (gamePhase !== GAME_PHASE.round) {
      router.push(routes.START);
    }
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
