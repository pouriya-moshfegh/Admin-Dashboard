import { Avatar } from "@mui/material";
import Searchbox from "./SearchBox/Searchbox";
import HeaderIcons from "./icons/icons";


export default function RightMenu() {
  return (
    <div className="text-white dark:text-secondary flex flex-row-reverse items-center">
      {/* _______ avatar ______ */}
      <Avatar
        src="/public/image/profile/avatar-1.jpg"
        sx={{ bgcolor: "f9f9f9" }}
      />
      {/* ______ icons   _____ */}
      <HeaderIcons />
      
      {/* ______ Searchbox ______ */}

      <Searchbox />
    </div>
  );
}
