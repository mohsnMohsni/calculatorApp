const useValueOrSigns = (value, input) => {
  return value === "0" ? "" : input;
};

export { useValueOrSigns };
