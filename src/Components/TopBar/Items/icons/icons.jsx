import { useContext } from "react";
import { MainContext } from "../../../../contexts/MainContext";
import { Link } from "react-router-dom";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function HeaderIcons() {
  const contextData = useContext(MainContext);
  const themeHandler = () => {
    contextData.isDark 
      ? contextData.setIsDark(false)
      : contextData.setIsDark(true);
  };
  return (
    <>
      {/* ______ setting  ______ */}
      <Link>
        <SettingsRoundedIcon sx={{ fontSize: 22 }} className="scale-icon" />
      </Link>
      {/* ______ notif  ______ */}

      <Link className="relative">
        <NotificationsRoundedIcon
          sx={{ fontSize: 22 }}
          className="scale-icon"
        />
        <span className="absolute top-0 bg-red w-4 h-4 rounded-full text-center dark:text-white text-[10px] right-0 ">
          2
        </span>
      </Link>
      {/* ______ LightMode  _____ */}

      {contextData.isDark ? (
        <DarkModeIcon
          sx={{ fontSize: 22 }}
          onClick={themeHandler}
          className="scale-icon"
        />
      ) : (
        <LightModeIcon
          sx={{ fontSize: 22 }}
          onClick={themeHandler}
          className="scale-icon"
        />
      )}
    </>
  );
}
