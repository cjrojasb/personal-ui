import { Button } from "@cjrojasb/personal-ui-package";
import { Outlet } from "react-router-dom";
import Sidebar from "components/organisms/Sidebar";

function LayoutPage() {
  return (
    <div className="mx-auto grid grid-cols-6 gap-4">
      <Sidebar />
      <div className="p-3 col-span-5">
        <Button onClick={() => alert("onClick")} variation="primary" className="text-sm m-4">
          Primary
        </Button>
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutPage;
