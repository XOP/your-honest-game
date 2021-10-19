import { createSlice } from "@reduxjs/toolkit";

import { CLUE_PHASE, GAME_PHASE } from "../utils";


// ========================================================
// Setup
// ========================================================

const initialState = {
  game_phase: GAME_PHASE.init,
  clue_phase: CLUE_PHASE.init,
  score: 0,
  correct: 0,
  incorrect: 0,
  pass: 0,
};


// ========================================================
// Slice
// ========================================================

export const gameSlice = createSlice({
  name: "game",
  initialState,

  reducers: {
    resetGamePhase: (state) => {
      state.game_phase = GAME_PHASE.init;
    },
    setGamePhaseRound: (state) => {
      state.game_phase = GAME_PHASE.round;
    },
    setGamePhaseEnd: (state) => {
      state.game_phase = GAME_PHASE.end;
    },

    resetCluePhase: (state) => {
      state.clue_phase = CLUE_PHASE.init;
    },
    setCluePhaseActive: (state) => {
      state.clue_phase = CLUE_PHASE.active;
    },
    setCluePhaseAnswer: (state) => {
      state.clue_phase = CLUE_PHASE.answer;
    }
  }
});

export const {
  resetGamePhase,
  setGamePhaseRound,
  setGamePhaseEnd,
  resetCluePhase,
  setCluePhaseActive,
  setCluePhaseAnswer
} = gameSlice.actions;

export const scoreSelector = (state) => state.game.score;
export const gamePhaseSelector = (state) => state.game.game_phase;
export const cluePhaseSelector = (state) => state.game.clue_phase;

export default gameSlice.reducer;
