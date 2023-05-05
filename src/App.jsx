import routes from "./Routes"
import TopBar from "./Components/TopBar/TopBar"
import { useRoutes } from "react-router-dom"
import Sidebar from "./Components/Sidebar/Sidebar"

function App() {
let router = useRoutes(routes)
  return (
    <>
    <TopBar/>
    <Sidebar/>
     {router}
    </>
  )
}

export default App
