import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "state";
// import { current } from "immer";
import { createSelector } from "reselect";

interface AppState {
  test: number;
}

const initialState: AppState = {
  test: 0,
};

export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTest: (state) => {
      state.test += 1;
    },
  },
});

export const { setTest } = slice.actions;

export const animationControllsSelector = createSelector(
  (state: RootState) => state.app,
  (field) => {
    return {
      // animationSpeed: field.animationSpeed,
      // isAnimationPaused: field.isAnimationPaused,
    };
  }
);

export default slice.reducer;
