import Nav from "@components/Nav";
import { useSelector } from "react-redux";
import Keyboards from "@components/Keyboards";
import CalculateMonitor from "@components/CalculateMonitor";
import { selectDarkMode } from "@reduxApp/reducers/darkModeSlice";

export default function Index(props) {
  const darkMode = useSelector(selectDarkMode);

  return (
    <div className={`h-screen pt-10 ${darkMode ? "dark" : ""}`}>
      <div className={"flex flex-col justify-between pb-5 shadow-xl rounded-lg bg-white dark:bg-gray-800"} style={{height: "95%"}}>
        <Nav />
        <CalculateMonitor />
        <Keyboards />
      </div>
    </div>
  );
}
