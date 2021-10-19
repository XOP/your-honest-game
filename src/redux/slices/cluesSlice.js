import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import axios from "axios";

import { STATUS } from "../utils";

// ========================================================
// Setup
// ========================================================

const initialState = {
  status: STATUS.init,
  categories: [],
  active: null,
};

// ========================================================
// Async
// ========================================================

export const fetchClues = createAsyncThunk(
  "clues/fetch",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/categories");
      const data = await response.data;

      return data;
    } catch (err) {
      let error = err;

      if (!error.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

// ========================================================
// Slice
// ========================================================

export const cluesSlice = createSlice({
  name: "clues",
  initialState,

  reducers: {
    activateClue: (state, action) => {
      const { id, value } = action.payload;
      const category = state.categories.find((cat) => cat.id === id);
      const clue = category.clues[value];

      state.active = {
        categoryId: id,
        clue: {
          ...clue,
          value
        },
      };

      clue.activated = true;
    },

    resetClue: (state) => {
      state.active = null;
    },
  },

  extraReducers: {
    [fetchClues.pending]: (state, action) => {
      state.status = STATUS.loading;
    },

    [fetchClues.rejected]: (state, action) => {
      state.status = STATUS.error;

      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    },

    [fetchClues.fulfilled]: (state, action) => {
      state.status = STATUS.idle;
      state.categories = action.payload;
    },
  },
});

// ========================================================
// Actions / Selectors
// ========================================================

export const { activateClue, resetClue } = cluesSlice.actions;

export const statusSelector = (state) => state.clues.status;
export const cluesSelector = (state) => state.clues.categories;
export const activeClueSelector = (state) => state.clues.active;

export default cluesSlice.reducer;
