import { configureStore } from "@reduxjs/toolkit";

import gameReducer from "./slices/gameSlice";
import cluesReducer from "./slices/cluesSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
    clues: cluesReducer
  }
});

export default store;
