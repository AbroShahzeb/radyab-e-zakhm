import { Link, Outlet } from "react-router-dom";
import ROUTES from "../../../constants/routes";
import { PageHeader } from "../../../layout/dashboardLayout/components";
import { LogoutIcon } from "../../../assets/svgAssets";
import { Links } from "./components";

export const Settings = () => {
  return (
    <div className="w-full flex-1 max-h-dvh h-full bg-surface-2">
      <PageHeader title="Settings" />
      <div className="flex flex-1 h-[calc(100vh-81px-44px)] sm:h-[calc(100vh-81px-74px)] lg:h-[calc(100vh-81px)]">
        <div className="py-6 px-4 lg:pl-8 lg:py-5 pr-4 lg:border-r border-neutral-200 dark:border-neutral-800 flex flex-col gap-2 w-full lg:w-[260px] h-full">
          <Links />
          <Link
            to={ROUTES.LOGIN}
            className="flex items-center gap-2 py-2.5 text-preset-4 text-secondary-text px-4 hover:bg-blue-50 dark:hover:bg-neutral-800 rounded-lg "
          >
            <span>
              <LogoutIcon />
            </span>
            <span>Logout</span>
          </Link>
        </div>

        <div className="flex-1 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
