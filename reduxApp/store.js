import { configureStore } from "@reduxjs/toolkit";
import calculateSlice from "./reducers/calculateSlice";

export default configureStore({
  reducer: {
    calculator: calculateSlice,
  },
});
