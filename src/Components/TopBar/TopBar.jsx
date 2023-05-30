import "./topbar.css";
import Logo from "./Logo/Logo";
import RightMenu from "./Items/RightMenu";
export default function TopBar() {
  return (
    <div className={"w-full flex justify-end fixed top-0 topbar-shadow z-20"}>
      {/* nav */}
      <nav className="md:w-[70%] lg:w-[73%] xl:w-[80%] w-full  bg-primary dark:bg-white  h-20  flex justify-between items-center px-2 pl-10 md:pl-2 realtive">
        {/* _________  menu icon and logo _____________*/}
        <Logo />

        {/* _________  setting and avatar _____________*/}
        <RightMenu />
      </nav>
    </div>
  );
}
