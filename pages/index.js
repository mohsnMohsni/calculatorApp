import Nav from "@components/Nav";
import Keyboards from "@components/Keyboards";
import CalculateMonitor from "@components/CalculateMonitor";

export default function Index(props) {
  return (
    <div className={"flex flex-col justify-between h-screen pb-5 dark:bg-gray-800"}>
      <Nav />
      <CalculateMonitor />
      <Keyboards />
    </div>
  );
}
