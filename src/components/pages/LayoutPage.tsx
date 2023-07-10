import { Outlet } from "react-router-dom";
import Sidebar from "components/organisms/Sidebar";

function LayoutPage() {
  return (
    <div className="mx-auto grid grid-cols-6 gap-2">
      <Sidebar />
      <div className="p-3 col-span-5">
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutPage;
