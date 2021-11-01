import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "state";
// import { current } from "immer";
import { createSelector } from "reselect";
import { User } from "@firebase/auth";

interface AppState {
  user: User | null;
}

const initialState: AppState = {
  user: null,
};

export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = slice.actions;

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
