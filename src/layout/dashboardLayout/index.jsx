import { Link, Outlet } from "react-router-dom";
import ROUTES from "../../constants/routes";
import { PlusIcon } from "../../assets/svgAssets";
import { Sidebar, Tabs } from "./components";

export const DashborardLayout = () => {
  return (
    <main className="flex relative min-h-dvh max-h-dvh w-full">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="flex-1 relative">
        <Outlet />
        {/* <Link
          to={ROUTES.HOME}
          className="lg:hidden size-12 flex items-center z-10 justify-center shadow-sm dark:shadow-none bg-blue-500 text-white rounded-full fixed bottom-[63px] right-4 sm:bottom-[107px] sm:right-8"
        >
          <PlusIcon />
        </Link> */}
      </div>
      <div className="fixed right-0 left-0 bottom-0 w-full lg:hidden">
        <Tabs />
      </div>
    </main>
  );
};
