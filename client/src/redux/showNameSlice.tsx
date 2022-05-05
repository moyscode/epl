import { createSlice } from "@reduxjs/toolkit";

export interface ShowNameState {
  value: boolean;
}

const initialState: ShowNameState = {
  value: false,
};

export const showNameStateSlice = createSlice({
  name: "showName",
  initialState,
  reducers: {
    showNameStateChange: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showNameStateChange } = showNameStateSlice.actions;

export default showNameStateSlice.reducer;
