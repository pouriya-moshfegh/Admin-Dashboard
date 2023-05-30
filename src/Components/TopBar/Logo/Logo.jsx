import logo from "../../../../public/image/myLogo/logo-no-background.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";

export default function Logo() {
  const contextData = useContext(MainContext);
  return (
    <div className="">
      {/* menu icon */}
      <Link to="/dashboard" className="md:hidden">
        <MenuIcon  sx={{ fontSize: 30 }} className="md:hidden dark:text-secondary text-white absolute left-2 top-2 text-2xl" />
      </Link>
      {/* logo */}
      {!contextData.isSearchOpen && (
        <img
          src={logo}
          className={ " hidden xsm:block sm:w-[250px] w-1/2 sm:static absolute bottom-1 left-2" }
          alt="logo image"
        />
      )}
    </div>
  );
}
