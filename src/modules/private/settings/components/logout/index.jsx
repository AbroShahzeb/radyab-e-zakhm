import { useMutation } from "@tanstack/react-query";
import { LogoutIcon } from "../../../../../assets/svgAssets";
import { logoutUser } from "../../../../../api/auth";
import {
  showErrorToast,
  showSuccessToast,
} from "../../../../../lib/toastUtils";
import ROUTES from "../../../../../constants/routes";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  const { mutate: logoutMutate, isPending } = useMutation({
    mutationFn: logoutUser,
    onSuccess: (data) => {
      if (data.status !== "success") {
        showErrorToast(data.message);
        return;
      }

      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");

      showSuccessToast("Logged out successfully. Redirecting...");

      navigate(ROUTES.LOGIN, { replace: true });
    },
    onError: (error) => {
      console.error("Logout failed:", error);
      showErrorToast(error.message);
    },
  });

  return (
    <button
      type="button"
      onClick={logoutMutate}
      disabled={isPending}
      className="flex items-center gap-2 py-2.5 text-preset-4 text-secondary-text px-4 hover:bg-blue-50 dark:hover:bg-neutral-800 rounded-lg "
    >
      <span>
        <LogoutIcon />
      </span>
      <span>{isPending ? "Logging out..." : "Logout"}</span>
    </button>
  );
};
