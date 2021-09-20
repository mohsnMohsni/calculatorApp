import BackspaceOutlinedIcon from "@material-ui/icons/BackspaceOutlined";
import CircleButton from "@components/CircleButton";

export default function Keyboards(props) {
  return (
    <div className={"flex flex-col items-center justify-center"}>
      <div>
        <CircleButton value={"AC"} bgColor={"bg-white"} textColor={"text-gray-500"} />
        <CircleButton value={<BackspaceOutlinedIcon fontSize="small" className="mb-1" />} bgColor={"bg-white"} textColor={"text-gray-500"} />
        <CircleButton value={"%"} bgColor={"bg-white"} textColor={"text-green-500"} />
        <CircleButton value={"÷"} bgColor={"bg-white"} textColor={"text-green-500"} />
      </div>
      <div>
        <CircleButton value={"7"} bgColor={"bg-white"} textColor={"text-gray-500"} />
        <CircleButton value={"8"} bgColor={"bg-white"} textColor={"text-gray-500"} />
        <CircleButton value={"9"} bgColor={"bg-white"} textColor={"text-gray-500"} />
        <CircleButton value={"x"} bgColor={"bg-white"} textColor={"text-green-500"} />
      </div>
      <div>
        <CircleButton value={"4"} bgColor={"bg-white"} textColor={"text-gray-500"} />
        <CircleButton value={"5"} bgColor={"bg-white"} textColor={"text-gray-500"} />
        <CircleButton value={"6"} bgColor={"bg-white"} textColor={"text-gray-500"} />
        <CircleButton value={"-"} bgColor={"bg-white"} textColor={"text-green-500"} />
      </div>
      <div>
        <CircleButton value={"1"} bgColor={"bg-white"} textColor={"text-gray-500"} />
        <CircleButton value={"2"} bgColor={"bg-white"} textColor={"text-gray-500"} />
        <CircleButton value={"3"} bgColor={"bg-white"} textColor={"text-gray-500"} />
        <CircleButton value={"+"} bgColor={"bg-white"} textColor={"text-green-500"} />
      </div>
      <div>
        <CircleButton value={"±"} bgColor={"bg-white"} textColor={"text-gray-500"} />
        <CircleButton value={"0"} bgColor={"bg-white"} textColor={"text-gray-500"} />
        <CircleButton value={"."} bgColor={"bg-white"} textColor={"text-gray-500"} />
        <CircleButton value={"="} bgColor={"bg-white"} textColor={"text-green-500"} />
      </div>
    </div>
  );
}
