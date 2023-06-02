import { useState, useEffect } from "react";
import routes from "./Routes/Routes";
import TopBar from "./Components/TopBar/TopBar";
import { useRoutes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import { MainContext } from "./contexts/MainContext";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./css/scroll.css";
import { useNavigate } from 'react-router-dom';



function App() {

  // const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // useEffect(() => {
  //   alanBtn({
  //     key: "ee46d96470e10e9466118216852e693d2e956eca572e1d8b807a3e2338fdd0dc/stage",
  //     onCommand: (commandData) => {
  //       commandData.command === "lite" && setIsDark(false);
  //       commandData.command === "dark" && setIsDark(true);
  //       commandData.command === "users" && navigate('/users', { replace: true });
  //       commandData.command === "newUsers" && navigate('/newuser', { replace: true });
  //       commandData.command === "products" && navigate('/products', { replace: true });
  //       commandData.command === "home" && navigate('/', { replace: true });

  //     },
  //   });
  // }, []);



  let router = useRoutes(routes);
  return (

    <MainContext.Provider
      value={{
        searchValue,
        setSearchValue,
        isSearchOpen,
        setIsSearchOpen,
        isDark,
        setIsDark,
      }}
    >

      <div className={isDark ? "" : "dark"}>
        <TopBar />
        <Sidebar />
           <div  className="flex">
          <div className="nav-size"></div>
          <div className="right-side">{router}</div>
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default App;
