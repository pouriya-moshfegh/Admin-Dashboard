import React, { useEffect } from 'react';
import { useState } from "react";
import routes from "./Routes/Routes";
import TopBar from "./Components/TopBar/TopBar";
import { useRoutes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import { MainContext } from "./contexts/MainContext";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./css/scroll.css";

function App() {

 useEffect(() => {
  alanBtn({
      key: 'ee46d96470e10e9466118216852e693d2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'go:back') {
          // Call the client code that will react to the received command
        }
      }
  });
}, []);

  const [searchValue, setSearchValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
localStorage.clear()

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
        <div className="flex">
          <div className="nav-size"></div>
          <div className="right-side ">{router}</div>
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default App;
