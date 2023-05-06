import routes from "./Routes";
import TopBar from "./Components/TopBar/TopBar";
import { useRoutes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  let router = useRoutes(routes);
  return (
    <div className="select-none">
      <TopBar />
      <Sidebar />
      <div className="flex">
        <div className="nav-size"></div>
        <div className="right-side ">
          {router}
        </div>
      </div>
    </div>
  );
}

export default App;
