import { createSlice } from "@reduxjs/toolkit";

import { GAME_PHASE } from "../utils";


// ========================================================
// Setup
// ========================================================

const initialState = {
  phase: GAME_PHASE.init,
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

  }
});

export const phaseSelector = (state) => state.game.phase;

export default gameSlice.reducer;
