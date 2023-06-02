import { NavLink } from "react-router-dom";
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
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

export default function SidebarItems() {
  return (
    <>
      <div className=" h-20 w-full bg-secondary dark:bg-[#f8f8f8] dark:border-r sticky top-0 flex-center ">
        {/* ________ main title ________ */}
        <h2 className="text-white/90 dark:text-primary uppercase  text-2xl"> agent advance</h2>
      </div>
      <div className="h-full scroll-side md:overflow-scroll dark:bg-white dark:text-secondary flex flex-col text-white/70">
        <div>
          {/* ___________________ title (Dashboard)  _________________________ */}
          <NavLink className="aside-item text-xl">
            <SpeedRoundedIcon className="relative  mx-4 text-[#3aaa53] " />
            Dashboard
          </NavLink>
          {/* _________ sub menu ________ */}
          {/* home */}
          <NavLink to="/" className={`aside-subitem group`}>
            <RoofingOutlinedIcon fontSize="small" className="aside-icon" />
            Home
          </NavLink>

          {/* anlytics */}
          <NavLink to="/analytics" className={`aside-subitem group`}>
            <TimelineRoundedIcon fontSize="small" className="aside-icon" />
            analytics
          </NavLink>
          <NavLink  to="/sales" className={`aside-subitem group`}>
            <TrendingUpRoundedIcon fontSize="small" className="aside-icon" />
            Sales
          </NavLink>

          {/* ___________________ title (Quick menu) _________________________ */}
          <NavLink className="aside-item ">
            <ElectricBoltOutlinedIcon className="relative  mx-4 text-[yellow] " />
            Quick menu
          </NavLink>
          {/* _________ sub menu ________ */}
          {/* users */}
          <NavLink to="/users" className={`aside-subitem group`}>
            <PermIdentityOutlinedIcon fontSize="small" className="aside-icon" />
            users
          </NavLink>
          {/* products */}
          <NavLink to="/products" className={`aside-subitem group`}>
            <ShoppingCartOutlinedIcon fontSize="small" className="aside-icon" />
            products
          </NavLink>
          {/* tranactions */}
          <NavLink className={`aside-subitem group`}>
            <AttachMoneyOutlinedIcon fontSize="small" className="aside-icon" />
            tranactions
          </NavLink>
          {/* reports */}
          <NavLink className={`aside-subitem group`}>
            <BarChartOutlinedIcon fontSize="small" className="aside-icon" />
            reports
          </NavLink>

          {/* ___________________ title (Notifications) _________________________ */}
          <NavLink className="aside-item ">
            <NotificationsActiveOutlinedIcon className="relative  mx-4 text-red/90 " />
            Notifications
          </NavLink>
          {/* _________ sub menu ________ */}
          {/* mail */}
          <NavLink className={`aside-subitem group`}>
            <EmailOutlinedIcon fontSize="small" className="aside-icon" />
            mail
          </NavLink>
          {/* feedbacks */}
          <NavLink className={`aside-subitem group`}>
            <ThumbUpOffAltOutlinedIcon
              fontSize="small"
              className="aside-icon"
            />
            feedbacks
          </NavLink>
          {/* messages */}
          <NavLink to="/comments"  className={`aside-subitem group`}>
            <ChatOutlinedIcon fontSize="small" className="aside-icon" />
            messages
          </NavLink>

          {/* ___________________ title (staff) _________________________ */}
          <NavLink className="aside-item ">
            <EngineeringOutlinedIcon className="relative  mx-4 text-[orange]/80 " />
            staff
          </NavLink>
          {/* _________ sub menu ________ */}
          {/* mail */}
          <NavLink className={`aside-subitem group`}>
            <ManageAccountsOutlinedIcon
              fontSize="small"
              className="aside-icon"
            />
            manage
          </NavLink>
          {/* feedbacks */}
          <NavLink className={`aside-subitem group`}>
            <ThumbUpOffAltOutlinedIcon
              fontSize="small"
              className="aside-icon"
            />
            analytics
          </NavLink>
          {/* messages */}
          <NavLink className={`aside-subitem group`}>
            <ErrorOutlineOutlinedIcon fontSize="small" className="aside-icon" />
            report
          </NavLink>
          <div className="h-32"></div>
        </div>
      </div>
    </>
  );
}
