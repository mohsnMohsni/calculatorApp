import BackspaceOutlinedIcon from "@material-ui/icons/BackspaceOutlined";
import CircleButton from "@components/CircleButton";

export default function Keyboards() {
  return (
    <div className={"flex flex-col items-center justify-center"}>
      <div>
        <CircleButton value={"AC"} bgColor={"bg-white dark:bg-gray-500"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-900"} />
        <CircleButton value={<BackspaceOutlinedIcon fontSize="small" className="mb-1" />} bgColor={"bg-white dark:bg-gray-500"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-900"} />
        <CircleButton value={"%"} bgColor={"bg-white"} textColor={"text-green-500"} hover={"hover:bg-gray-100 dark:hover:bg-gray-200"} />
        <CircleButton value={"÷"} bgColor={"bg-white"} textColor={"text-green-500"} hover={"hover:bg-gray-100 dark:hover:bg-gray-200"} />
      </div>
      <div>
        <CircleButton value={"7"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} />
        <CircleButton value={"8"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} />
        <CircleButton value={"9"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} />
        <CircleButton value={"x"} bgColor={"bg-white"} textColor={"text-green-500"} hover={"hover:bg-gray-100 dark:hover:bg-gray-200"} />
      </div>
      <div>
        <CircleButton value={"4"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} />
        <CircleButton value={"5"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} />
        <CircleButton value={"6"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} />
        <CircleButton value={"-"} bgColor={"bg-white"} textColor={"text-green-500"} hover={"hover:bg-gray-100 dark:hover:bg-gray-200"} />
      </div>
      <div>
        <CircleButton value={"1"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} />
        <CircleButton value={"2"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} />
        <CircleButton value={"3"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} />
        <CircleButton value={"+"} bgColor={"bg-white"} textColor={"text-green-500"} hover={"hover:bg-gray-100 dark:hover:bg-gray-200"} />
      </div>
      <div>
        <CircleButton value={"±"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} />
        <CircleButton value={"0"} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} />
        <CircleButton value={"."} bgColor={"bg-transparent"} textColor={"text-gray-500 dark:text-white"} hover={"hover:bg-gray-100 dark:hover:bg-gray-700"} />
        <CircleButton value={"="} bgColor={"bg-white"} textColor={"text-green-500"} hover={"hover:bg-gray-100 dark:hover:bg-gray-200"} />
      </div>
    </div>
  );
}
