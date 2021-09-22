/* eslint-disable react-hooks/rules-of-hooks */
import { createSlice } from "@reduxjs/toolkit";
import { useValueOrSigns } from "@hooks/index";

const calculateSlice = createSlice({
  name: "calculator",
  initialState: {
    inputValue: "0",
    machinValue: "0",
    result: 0,
  },
  reducers: {
    addValue: (state, action) => {
      state.inputValue = state.inputValue === "0" ? action.payload : state.inputValue + action.payload;
      if (state.inputValue.slice(-3, -2) === "%") state.machinValue += "*";
      state.machinValue = state.machinValue === "0" ? action.payload : state.machinValue + action.payload;
      try {
        state.result = eval(state.machinValue);
      } catch {
        state.result = "Error";
      }
    },
    allClean: (state) => {
      state.inputValue = "0";
      state.machinValue = "0";
      state.result = 0;
    },
    percentage: (state) => {
      if (state.inputValue.slice(-1) === " ") state.machinValue = state.machinValue.slice(0, -1);
      if (state.inputValue.slice(-2, -1) === "%") state.machinValue = state.machinValue.slice(0, -3);
      if (state.inputValue.slice(-1) === " ") state.inputValue = state.inputValue.slice(0, -3);
      state.inputValue += useValueOrSigns(state.inputValue, " % ");
      state.machinValue += useValueOrSigns(state.inputValue, "*.01");
      try {
        state.result = eval(state.machinValue);
      } catch {
        state.result = "Error";
      }
    },
    division: (state) => {
      if (state.inputValue.slice(-1) === " ") state.machinValue = state.machinValue.slice(0, -1);
      if (state.inputValue.slice(-2, -1) === "%") state.machinValue = state.machinValue.slice(0, -3);
      if (state.inputValue.slice(-1) === " ") state.inputValue = state.inputValue.slice(0, -3);
      state.inputValue += useValueOrSigns(state.inputValue, " ÷ ");
      state.machinValue += useValueOrSigns(state.inputValue, "/");
    },
    multiplication: (state) => {
      if (state.inputValue.slice(-1) === " ") state.machinValue = state.machinValue.slice(0, -1);
      if (state.inputValue.slice(-2, -1) === "%") state.machinValue = state.machinValue.slice(0, -3);
      if (state.inputValue.slice(-1) === " ") state.inputValue = state.inputValue.slice(0, -3);
      state.inputValue += useValueOrSigns(state.inputValue, " x ");
      state.machinValue += useValueOrSigns(state.inputValue, "*");
    },
    detract: (state) => {
      if (state.inputValue.slice(-1) === " ") state.machinValue = state.machinValue.slice(0, -1);
      if (state.inputValue.slice(-2, -1) === "%") state.machinValue = state.machinValue.slice(0, -3);
      if (state.inputValue.slice(-1) === " ") state.inputValue = state.inputValue.slice(0, -3);
      state.inputValue = state.inputValue === "0" ? "-" : state.inputValue + " - ";
      state.machinValue = state.inputValue === "0" ? "-" : state.machinValue + "-";
    },
    sum: (state) => {
      if (state.inputValue.slice(-1) === " ") state.machinValue = state.machinValue.slice(0, -1);
      if (state.inputValue.slice(-2, -1) === "%") state.machinValue = state.machinValue.slice(0, -3);
      console.log(state.inputValue.slice(-2, -1));
      if (state.inputValue.slice(-1) === " ") state.inputValue = state.inputValue.slice(0, -3);
      state.inputValue += useValueOrSigns(state.inputValue, " + ");
      state.machinValue += useValueOrSigns(state.inputValue, "+");
    },
    getResult: (state) => {
      if (state.inputValue.slice(-1) === " ") state.machinValue = state.machinValue.slice(0, -1);
      if (state.inputValue.slice(-2, -1) === "%") state.machinValue = state.machinValue.slice(0, -3);
      if (state.inputValue.slice(-1) === " ") state.inputValue = state.inputValue.slice(0, -3);
      try {
        state.result = eval(state.machinValue);
      } catch {
        state.result = "Error";
      }
    },
    removeValueByBackspace: (state) => {
      if (state.inputValue.slice(-3, -2) === "%") state.machinValue = state.machinValue.slice(0, -2);
      state.inputValue = state.inputValue.slice(-1) === " " ? state.inputValue.slice(0, -3) : state.inputValue.slice(0, -1);
      state.machinValue = state.machinValue.slice(0, -1);
      if (!state.inputValue.length) {
        state.inputValue = "0";
        state.machinValue = "0";
        state.result = 0;
      }
    },
  },
});

export const { addValue, allClean, removeValueByBackspace, percentage, division, multiplication, detract, sum, getResult } = calculateSlice.actions;
export const selectInputValue = (state) => state.calculator.inputValue;
export const selectResult = (state) => state.calculator.result;
export default calculateSlice.reducer;
