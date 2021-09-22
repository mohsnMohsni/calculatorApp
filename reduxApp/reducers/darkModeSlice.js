import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkmode",
  initialState: {
    value: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export const selectDarkMode = (state) => state.darkMode.value;
export default darkModeSlice.reducer;
