import { useSelector } from "react-redux";
import { selectInputValue, selectResult } from "@reduxApp/reducers/calculateSlice";

export default function CalculateMonitor() {
  const inputValue = useSelector(selectInputValue);
  const resultValue = useSelector(selectResult)

  return (
    <div>
      <div className={"text-gray-400 text-right px-8 py-2"}>{inputValue}</div>
      <div className={"text-black dark:text-white text-right px-6 text-4xl"}>{resultValue}</div>
    </div>
  );
}
