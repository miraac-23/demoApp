import SideBarComponent from "./SidebarComponent";

export default function AppSideBar({ sidebarItems }) {
    return (
        <div className="card bg-slate-600 h-full overflow-y-auto gap-2 flex flex-column">
            <SideBarComponent items={sidebarItems} />
        </div>
    );
}
