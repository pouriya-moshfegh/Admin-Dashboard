import "./Sidebar.css";
import SideBaritems from "./SideBaritems";

export default function Sidebar() {
  return (
    <aside className="hidden md:block fixed select-none top-0 left-0 nav-size bg-primary nav-shadow">
        <SideBaritems></SideBaritems>
    </aside>
  );
}
