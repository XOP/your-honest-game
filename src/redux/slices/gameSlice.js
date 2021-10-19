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
    setGamePhaseRound: (state) => {
      state.game_phase = GAME_PHASE.round;
    },
    setGamePhaseEnd: (state) => {
      state.game_phase = GAME_PHASE.end;
    },
    setGamePhaseInit: (state) => {
      state.game_phase = GAME_PHASE.init;
    },

    setCluePhaseActive: (state) => {
      state.clue_phase = CLUE_PHASE.active;
    },
    setCluePhaseAnswer: (state) => {
      state.clue_phase = CLUE_PHASE.answer;
    },
    setCluePhaseInit: (state) => {
      state.clue_phase = CLUE_PHASE.init;
    },
  
    incrementScore: (state, action) => {
      state.score += Number(action.payload.value);
    },
    decrementScore: (state, action) => {
      state.score -= Number(action.payload.value);
    },
  },
});

// ========================================================
// Actions / Selectors
// ========================================================

export const {
  setGamePhaseRound,
  setGamePhaseEnd,
  setGamePhaseInit,
  setCluePhaseActive,
  setCluePhaseAnswer,
  setCluePhaseInit,
  incrementScore,
  decrementScore,
} = gameSlice.actions;

export const scoreSelector = (state) => state.game.score;
export const gamePhaseSelector = (state) => state.game.game_phase;
export const cluePhaseSelector = (state) => state.game.clue_phase;

export default gameSlice.reducer;
