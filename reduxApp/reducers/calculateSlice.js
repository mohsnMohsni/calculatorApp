import { createSlice } from "@reduxjs/toolkit";

const checkFirstValue = (value, input) => {
  return value === "0" ? "" : input;
};

const calculateSlice = createSlice({
  name: "calculator",
  initialState: {
    inputValue: "0",
    result: 0,
  },
  reducers: {
    addValue: (state, action) => {
      state.inputValue = state.inputValue === "0" ? action.payload : state.inputValue + action.payload;
      state.result = eval(state.inputValue);
    },
    allClean: (state) => {
      state.inputValue = "0";
    },
    percentage: (state) => {
      if (state.inputValue.slice(-1) === " ") state.inputValue = state.inputValue.slice(0, -3);
      state.inputValue += checkFirstValue(state.inputValue, " % ");
      // * 0.01
    },
    division: (state) => {
      if (state.inputValue.slice(-1) === " ") state.inputValue = state.inputValue.slice(0, -3);
      state.inputValue += checkFirstValue(state.inputValue, " ÷ ");
    },
    multiplication: (state) => {
      if (state.inputValue.slice(-1) === " ") state.inputValue = state.inputValue.slice(0, -3);
      state.inputValue += checkFirstValue(state.inputValue, " x ");
    },
    detract: (state) => {
      if (state.inputValue.slice(-1) === " ") state.inputValue = state.inputValue.slice(0, -3);
      state.inputValue = state.inputValue === "0" ? "-" : state.inputValue + " - ";
    },
    sum: (state) => {
      if (state.inputValue.slice(-1) === " ") state.inputValue = state.inputValue.slice(0, -3);
      state.inputValue += checkFirstValue(state.inputValue, " + ");
    },
    getResult: (state) => {
      if (state.inputValue.slice(-1) === " ") state.inputValue = state.inputValue.slice(0, -3);
      state.result = eval(state.inputValue);
    },
    removeValueByBackspace: (state) => {
      state.inputValue = state.inputValue.slice(-1) === " " ? state.inputValue.slice(0, -3) : state.inputValue.slice(0, -1);
    },
  },
});

export const { addValue, allClean, removeValueByBackspace, percentage, division, multiplication, detract, sum, getResult } = calculateSlice.actions;
export const selectInputValue = (state) => state.calculator.inputValue;
export const selectResult = (state) => state.calculator.result;
export default calculateSlice.reducer;
