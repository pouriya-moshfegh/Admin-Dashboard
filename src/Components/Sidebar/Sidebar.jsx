import "./Sidebar.css";
import { Link } from "react-router-dom";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';


export default function Sidebar() {
  return (
    <aside className="hidden md:block fixed select-none h-screen  top-0 left-0 md:w-[35%] lg:w-[30%] xl:w-[25%] bg-[#2a2b36] shadow-xl border-r border-slate-800 ">
      <div className="h-20 w-full bg-[#181924]  sticky top-0 flex-center">
        <h2 className="text-white/90  uppercase  text-3xl"> agent advance</h2>
      </div>
      <div className="h-full overflow-scroll scrol flex flex-col text-white/70">
 <div > {/* ============================== */}
        {/* title */}
        <Link className="aside-item flex items-center text-xl ">
          <SpeedRoundedIcon className="relative  mx-4 text-[#3aaa53] " />
          Dashboard
        </Link>
        {/* ====sub menu==== */}
        {/* home */}
        <Link className="aside-subitem group">
          <RoofingOutlinedIcon fontSize="small" className="aside-icon" />
          Home
        </Link>
        {/* anlytics */}
        <Link className="aside-subitem group">
          <TimelineRoundedIcon fontSize="small" className="aside-icon" />
          analytics
        </Link>
        <Link className="aside-subitem group">
          <TrendingUpRoundedIcon fontSize="small" className="aside-icon" />
          Sales
        </Link>
        {/* ============================== */}
        {/* title */}
        <Link className="aside-item flex items-center text-lg mt-4">
          <ElectricBoltOutlinedIcon className="relative  mx-4 text-yellow-300/90 " />
          Quick menu
        </Link>
        {/* ====sub menu==== */}
        {/* home */}
        <Link className="aside-subitem group">
          <PermIdentityOutlinedIcon fontSize="small" className="aside-icon" />
          user
        </Link>
        {/* anlytics */}
        <Link className="aside-subitem group">
          <PermIdentityOutlinedIcon fontSize="small" className="aside-icon" />
          new user
        </Link>
        <Link className="aside-subitem group">
          <ShoppingCartOutlinedIcon fontSize="small" className="aside-icon" />
          products
        </Link>
        <Link className="aside-subitem group">
          <AttachMoneyOutlinedIcon fontSize="small" className="aside-icon" />
          tranaction
        </Link>
        <Link className="aside-subitem group">
          <BarChartOutlinedIcon fontSize="small" className="aside-icon" />
          reports
        </Link>
        {/* ============================== */}
        {/* title */}
        <Link className="aside-item flex items-center text-lg mt-4">
          <NotificationsActiveOutlinedIcon className="relative  mx-4 text-red-600/90 " />
          Notifications
        </Link>
        {/* ====sub menu==== */}
        {/* mail */}
        <Link className="aside-subitem group">
          <EmailOutlinedIcon fontSize="small" className="aside-icon" />
          mail
        </Link>
        {/* feedbacks */}
        <Link className="aside-subitem group">
          <ThumbUpOffAltOutlinedIcon fontSize="small" className="aside-icon" />
          feedbacks
        </Link>
        {/* messages */}
        <Link className="aside-subitem group">
          <ChatOutlinedIcon fontSize="small" className="aside-icon" />
          messages
        </Link>
         {/* ============================== */}
        {/* title */}
        <Link className="aside-item flex items-center text-lg mt-4">
          <EngineeringOutlinedIcon className="relative  mx-4 text-orange-700/90 " />
          staff
        </Link>
        {/* ====sub menu==== */}
        {/* mail */}
        <Link className="aside-subitem group">
          <ManageAccountsOutlinedIcon fontSize="small" className="aside-icon" />
          manage
        </Link>
        {/* feedbacks */}
        <Link className="aside-subitem group">
          <ThumbUpOffAltOutlinedIcon fontSize="small" className="aside-icon" />
          analytics
        </Link>
        {/* messages */}
        <Link className="aside-subitem group">
          <ErrorOutlineOutlinedIcon fontSize="small" className="aside-icon" />
      report
        </Link>
        <div className="h-32"></div>
        </div>
     
       
      </div>
    </aside>
  );
}
