import { MainContext } from "../../../../contexts/MainContext";
import { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import "./searchBox.css";
export default function Searchbox() {
  const contextData = useContext(MainContext);

  const searchBoxOpener = () => {
contextData.setIsSearchOpen(true);
  };

  const searchBoxCloser = () => {
contextData.setIsSearchOpen(false);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submit");
      }}
      href="#"
      className="relative"
    >
      <SearchIcon
        sx={{ fontSize: 30 }}
        className={contextData.isSearchOpen ? "icon-deactive" : "icon-active"}
        onClick={searchBoxOpener}
      />
      <input
        placeholder="... search"
        value={contextData.searchValue}
        onChange={(e) => contextData.setSearchValue(e.target.value)}
        className={
          contextData.isSearchOpen ? "search-deactive" : "search-active"
        }
        type="search"
      />
     {contextData.isSearchOpen && <CloseIcon
        sx={{ fontSize: 25 }}
        className= "absolute right-1 top-2 text-white/50 cursor-pointer"
        onClick={searchBoxCloser}
      />}
      
    </form>
  );
}
