import SideBaritems from "../Sidebar/SideBaritems"
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";


export default function Dashboard() {

    
  return (
    <div className="w-full relative top-3 scale-105 md:hidden ">
       <Link to=".."><CloseIcon className="absolute top-2 right-2 z-50"></CloseIcon></Link> 
        <SideBaritems ></SideBaritems>
    </div>
  )
}
