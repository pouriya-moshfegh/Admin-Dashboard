import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./topbar.css"
import { Avatar } from "@mui/material";

export default function TopBar() {
  return (
    <>
      {/* top nav container */}
      <div className="w-full flex justify-end fixed top-0 topbar-shadow   z-20">
        {/* nav */}
        <nav className="md:w-[70%] lg:w-[73%] xl:w-[80%] w-full bg-primary h-20  flex justify-between items-center px-2 pl-10 md:pl-2 realtive">
          {/* ============================ */}
          {/* menu icon and logo */}
          <div className="">
            {/* menu icon */}
            <Link to="/" className="md:hidden"> 
              <MenuIcon className="md:hidden text-white absolute left-2 top-2 text-2xl" />
            </Link>
            {/* logo */}
            <img
              src="/public/image/myLogo/logo-no-background.png"
              className="
            sm:w-[250px] w-1/2 sm:static absolute bottom-1 left-2"
              alt="logo image"
            />
          </div>
          {/* ============================ */}
          {/* !right side ==> logo and avatar */}
          <div className="text-white flex flex-row-reverse items-center">
            {/* avatar */}
            <Avatar sx={{ bgcolor: "f9f9f9"}}>N</Avatar>
          {/* ============== */}
            {/* icons */}
            <Link>
              <SettingsRoundedIcon sx={{ fontSize: 22 }}className="hover:scale-105  m-1" />
            </Link>
            <Link className="relative">
              <NotificationsRoundedIcon sx={{ fontSize: 22 }}className="hover:scale-105  m-1" />
              <span className="absolute top-0 bg-red w-4 h-4 rounded-full text-center  text-[10px] right-0 ">
                2
              </span>
            </Link>
            <Link className="relative">
              <LanguageIcon sx={{ fontSize: 22 }}className="hover:scale-105  m-1" />
              <span className="absolute top-0 bg-red w-4 h-4 rounded-full text-center  text-[10px] right-0">
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
