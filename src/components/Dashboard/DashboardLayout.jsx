import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="bg-gray-100 w-[80%] h-screen p-4 min-h-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
