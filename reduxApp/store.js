import { configureStore } from "@reduxjs/toolkit";
import calculateSlice from "./reducers/calculateSlice";
import darkModeSlice from "./reducers/darkModeSlice";

export default configureStore({
  reducer: {
    calculator: calculateSlice,
    darkMode: darkModeSlice,
  },
});
