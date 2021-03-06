import { Fragment } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode, toggleDarkMode } from "@reduxApp/reducers/darkModeSlice";

export default function Nav(props) {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <nav className={"flex item-center justify-between p-5 text-xs"}>
        <div className={"text-gray-400 dark:text-white"}>
          <button>
            <svg fill="#000000" className={"fill-current"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
              <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
            </svg>
          </button>
        </div>
        <div className={"text-gray-400"}>
          <ul className="flex">
            <li className="mr-3">
              <a className="inline-block rounded-3xl py-1 px-4 bg-green-600 hover:bg-green-700 dark:bg-white dark:hover:bg-gray-300 dark:text-green-700 text-white" href="#">
                Calculator
              </a>
            </li>
            <li className="mr-3">
              <a className="inline-block rounded-3xl hover:border-gray-200 hover:bg-gray-200 py-1 px-4" href="#">
                History
              </a>
            </li>
          </ul>
        </div>
        <div className={"text-gray-400 dark:text-white"}>
          <button onClick={() => dispatch(toggleDarkMode())}>
            {darkMode ? (
              <Image src="/icons/moon.png" alt="moon" height={30} width={30} />
            ) : (
              <svg fill="#000000" className={"fill-current"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                <path d="M 11 0 L 11 3 L 13 3 L 13 0 L 11 0 z M 4.2226562 2.8085938 L 2.8085938 4.2226562 L 4.9296875 6.34375 L 6.34375 4.9296875 L 4.2226562 2.8085938 z M 19.777344 2.8085938 L 17.65625 4.9296875 L 19.070312 6.34375 L 21.191406 4.2226562 L 19.777344 2.8085938 z M 12 5 C 8.1458514 5 5 8.1458514 5 12 C 5 15.854149 8.1458514 19 12 19 C 15.854149 19 19 15.854149 19 12 C 19 8.1458514 15.854149 5 12 5 z M 12 7 C 14.773268 7 17 9.2267316 17 12 C 17 14.773268 14.773268 17 12 17 C 9.2267316 17 7 14.773268 7 12 C 7 9.2267316 9.2267316 7 12 7 z M 0 11 L 0 13 L 3 13 L 3 11 L 0 11 z M 21 11 L 21 13 L 24 13 L 24 11 L 21 11 z M 4.9296875 17.65625 L 2.8085938 19.777344 L 4.2226562 21.191406 L 6.34375 19.070312 L 4.9296875 17.65625 z M 19.070312 17.65625 L 17.65625 19.070312 L 19.777344 21.191406 L 21.191406 19.777344 L 19.070312 17.65625 z M 11 21 L 11 24 L 13 24 L 13 21 L 11 21 z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </Fragment>
  );
}
