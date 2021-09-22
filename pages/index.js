import Nav from "@components/Nav";
import { useSelector } from "react-redux";
import Keyboards from "@components/Keyboards";
import CalculateMonitor from "@components/CalculateMonitor";
import { selectDarkMode } from "@reduxApp/reducers/darkModeSlice";

export default function Index(props) {
  const darkMode = useSelector(selectDarkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className={"flex flex-col justify-between h-screen pb-5 dark:bg-gray-800"}>
        <Nav />
        <CalculateMonitor />
        <Keyboards />
      </div>
    </div>
  );
}
