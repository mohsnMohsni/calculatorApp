import { Fragment } from "react";

export default function CircleButton({ value, bgColor, textColor }) {
  return (
    <Fragment>
      <button className={`rounded-full m-1 text-xl ${bgColor} w-16 sm:w-20 h-16 ${textColor} hover:bg-gray-100`}>{value}</button>
    </Fragment>
  );
}
