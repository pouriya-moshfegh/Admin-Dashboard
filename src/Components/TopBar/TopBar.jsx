import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function TopBar() {
  return (
    <>
      {/* top nav container */}
      <div className="w-full flex justify-end fixed top-0">
        {/* nav */}
        <nav className="md:w-[65%] lg:w-[70%] xl:w-[75%] w-full bg-[#2a2b36] h-20  flex justify-between items-center px-2 pl-10 md:pl-2 realtive shadow-xl ">
          {/* ============================ */}
          {/* menu icon and logo */}
          <div>
            {/* menu icon */}
            <Link to="/" className="md:hidden"> 
              <MenuIcon className="md:hidden text-white absolute left-2 top-2 text-2xl" />
            </Link>
            {/* logo */}
            <img
              src="/public/image/myLogo/logo-no-background.png"
              className="
        sm:w-[250px] w-48"
              alt="logo image"
            />
          </div>
          {/* ============================ */}
          {/* !right side ==> logo and avatar */}
          <div className="text-white flex flex-row-reverse items-center">
            {/* avatar */}
            <img src="./" className="w-16 bg-white h-16 rounded-full" alt="" />
          {/* ============== */}
            {/* icons */}
            <Link>
              <SettingsRoundedIcon className="hover:scale-105 m-1" />
            </Link>
            <Link className="relative">
              <NotificationsRoundedIcon className="hover:scale-105 m-1" />
              <span className="absolute top-0 bg-red-600 w-4 h-4 rounded-full text-center  text-[10px] right-0 ">
                2
              </span>
            </Link>
            <Link className="relative">
              <LanguageIcon className="hover:scale-105 m-1" />
              <span className="absolute top-0 bg-red-600 w-4 h-4 rounded-full text-center  text-[10px] right-0">
                2
              </span>
            </Link>
          {/* ============== */}

          </div>
        </nav>
      </div>
    </>
  );
}
