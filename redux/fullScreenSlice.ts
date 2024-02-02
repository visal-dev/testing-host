// fullScreenSlice.tsx
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface FullScreenState {
  isFullScreen: boolean;
}

const initialState: FullScreenState = {
  isFullScreen: false,
};

const fullScreenSlice = createSlice({
  name: "fullScreen",
  initialState,
  reducers: {
    toggleFullScreen: (state) => {
      state.isFullScreen = !state.isFullScreen;
    },
  },
});

export const { toggleFullScreen } = fullScreenSlice.actions;

export const selectIsFullScreen = (state: RootState) =>
  state.fullScreen.isFullScreen;

export default fullScreenSlice.reducer;
