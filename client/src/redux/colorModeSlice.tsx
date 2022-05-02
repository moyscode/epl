import { createSlice } from "@reduxjs/toolkit";

export interface ColorState {
  value: string;
}

const initialState: ColorState = {
  value: "light",
};

export const colorModeSlice = createSlice({
  name: "colorMode",
  initialState,
  reducers: {
    colorModeChange: (state) => {
      if (state.value === "light") {
        state.value = "dark";
      } else {
        state.value = "light";
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { colorModeChange } = colorModeSlice.actions;

export default colorModeSlice.reducer;
