import CircleButton from "@components/CircleButton";
import Nav from "@components/Nav";
import Keyboards from "@components/Keyboards"

export default function Index(props) {
  return (
    <div className={"flex flex-col justify-between h-screen pb-5"}>
      <Nav />
      <div></div>
      <Keyboards />
    </div>
  );
}
