import { Fragment } from "react";

export default function CircleButton({ value, bgColor, textColor, hover, handleClick }) {
  return (
    <Fragment>
      <button className={`rounded-full m-1 text-xl ${bgColor} w-16 sm:w-20 h-16 ${textColor} ${hover}`} onClick={handleClick}>{value}</button>
    </Fragment>
  );
}
