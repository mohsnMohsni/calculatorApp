import { useDispatch } from "react-redux";
import CircleButton from "@components/CircleButton";
import BackspaceOutlinedIcon from "@material-ui/icons/BackspaceOutlined";
import { addValue, allClean, removeValueByBackspace, percentage, division, multiplication, detract, sum, getResult } from "reduxApp/reducers/calculateSlice";

export default function Keyboards() {
  const dispatch = useDispatch();

  return (
    <div className={"flex flex-col items-center justify-center"}>
      <div>
        <CircleButton value={"AC"} bgColor={"bg-white dark:bg-gray-500"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-900"} handleClick={() => dispatch(allClean())} />
        <CircleButton value={<BackspaceOutlinedIcon fontSize="small" className="mb-1" />} bgColor={"bg-white dark:bg-gray-500"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-900"} handleClick={() => dispatch(removeValueByBackspace())} />
        <CircleButton value={"%"} bgColor={"bg-white"} textColor={"text-green-500"} hover={"hover:bg-gray-100 dark:hover:bg-gray-200"} handleClick={() => dispatch(percentage())} />
        <CircleButton value={"÷"} bgColor={"bg-white"} textColor={"text-green-500"} hover={"hover:bg-gray-100 dark:hover:bg-gray-200"} handleClick={() => dispatch(division())} />
      </div>
      <div>
        <CircleButton value={"7"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} handleClick={() => dispatch(addValue("7"))} />
        <CircleButton value={"8"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} handleClick={() => dispatch(addValue("8"))} />
        <CircleButton value={"9"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} handleClick={() => dispatch(addValue("9"))} />
        <CircleButton value={"x"} bgColor={"bg-white"} textColor={"text-green-500"} hover={"hover:bg-gray-100 dark:hover:bg-gray-200"} handleClick={() => dispatch(multiplication())} />
      </div>
      <div>
        <CircleButton value={"4"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} handleClick={() => dispatch(addValue("4"))} />
        <CircleButton value={"5"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} handleClick={() => dispatch(addValue("5"))} />
        <CircleButton value={"6"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} handleClick={() => dispatch(addValue("6"))} />
        <CircleButton value={"-"} bgColor={"bg-white"} textColor={"text-green-500"} hover={"hover:bg-gray-100 dark:hover:bg-gray-200"} handleClick={() => dispatch(detract())} />
      </div>
      <div>
        <CircleButton value={"1"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} handleClick={() => dispatch(addValue("1"))} />
        <CircleButton value={"2"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} handleClick={() => dispatch(addValue("2"))} />
        <CircleButton value={"3"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} handleClick={() => dispatch(addValue("3"))} />
        <CircleButton value={"+"} bgColor={"bg-white"} textColor={"text-green-500"} hover={"hover:bg-gray-100 dark:hover:bg-gray-200"} handleClick={() => dispatch(sum())} />
      </div>
      <div>
        <CircleButton value={"±"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} handleClick={() => dispatch(addValue("±"))} />
        <CircleButton value={"0"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} handleClick={() => dispatch(addValue("0"))} />
        <CircleButton value={"."} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} handleClick={() => dispatch(addValue("."))} />
        <CircleButton value={"="} bgColor={"bg-white"} textColor={"text-green-500"} hover={"hover:bg-gray-100 dark:hover:bg-gray-200"} handleClick={() => dispatch(getResult())} />
      </div>
    </div>
  );
}
