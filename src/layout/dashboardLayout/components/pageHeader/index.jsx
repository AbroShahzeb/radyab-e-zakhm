import { Link } from "react-router-dom";
import { SettingsIcon } from "../../../../assets/svgAssets";
import ROUTES from "../../../../constants/routes";
import { LogoLink } from "../sidebar/components";

export const PageHeader = ({ title, isLargeHidden = false }) => {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-800">
      <div className="lg:hidden py-3 px-4 h-11 md:py-4 md:px-8 md:h-[74px] dark:bg-neutral-800 text-primary-text bg-neutral-100 flex items-center">
        <LogoLink />
      </div>
      <div className="flex rounded-t-2xl lg:rounded-none bg-surface-2 items-center justify-between lg:h-[81px]  p-4 pb-0 lg:py-8 lg:px-8 lg:border-b border-neutral-200 dark:border-neutral-800">
        <h1
          className={`text-2xl font-bold text-primary-text dark:text-white ${
            isLargeHidden && "hidden lg:block"
          }`}
        >
          {title}
        </h1>

        <div className=" items-center gap-4 hidden lg:flex">
          {/* <LocalSearch
            route={ROUTES.HOME}
            iconPosition="left"
            placeholder="Search by title, content or tags..."
          /> */}

          <Link
            to={ROUTES.HOME}
            className="text-primary-text size-[42px] rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 flex items-center justify-center "
          >
            <SettingsIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
