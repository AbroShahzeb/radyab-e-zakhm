import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../../../../lib/validations";
import { Button, Input } from "../../../../generalComponents";
import {
  EyeClose,
  EyeOpen,
  GoogleIcon,
  Logo,
} from "../../../../assets/svgAssets";
import ROUTES from "../../../../constants/routes";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../../../api/auth";
import { showErrorToast, showSuccessToast } from "../../../../lib/toastUtils";

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
  });

  const { mutate: loginMutation, isPending } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      if (data.status !== "success") {
        showErrorToast(data.message);
        return;
      }

      reset();

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("isAuthenticated", true);

      showSuccessToast("Logged in successfully. Redirecting...");

      navigate(ROUTES.DASHBOARD, { replace: true });
    },
    onError: (error) => {
      console.error("Registration failed:", error);
      showErrorToast(error.message);
    },
  });

  const onSubmit = (data) => {
    loginMutation(data);
  };

  useEffect(() => {
    document.title = "Login | Radyab-e-Zakhm";
  }, []);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <main className="w-full bg-surface min-h-screen flex items-center justify-center py-16 px-4 sm:px-0">
      <div className="px-4 w-full p-12 sm:px-12 bg-neutral-0 dark:bg-neutral-950 dark:border-neutral-800 max-w-[540px]  flex flex-col gap-4 border border-neutral-200 rounded-xl shadow-lg dark:shadow-none">
        <div className="flex justify-center text-primary-text">
          <Logo />
        </div>

        <div className="flex flex-col gap-2 items-center text-center">
          <h2 className="text-preset-1 font-bold text-primary-text">
            Welcome to Radyab-e-Zakhm
          </h2>
          <p className="text-preset-4 text-secondary-text">
            Please log in to continue
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 pt-6"
        >
          <Input
            placeholder="email@example.com"
            label="Email Address"
            registerProps={register("email")}
            error={errors.email?.message}
          />
          <Input
            postIcon={
              <span
                className="text-primary-text"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
              >
                {isPasswordVisible ? (
                  <EyeOpen width={20} height={20} />
                ) : (
                  <EyeClose width={20} height={20} />
                )}
              </span>
            }
            label="Password"
            type={isPasswordVisible ? "text" : "password"}
            linkComponent={
              <span className="text-preset-5 text-secondary-text underline dark:text-neutral-400">
                <Link to="/forgot-password">Forgot?</Link>
              </span>
            }
            error={errors.password?.message}
            registerProps={register("password")}
          />
          <Button
            type="submit"
            label={isPending ? "Loading..." : "Login"}
            disabled={isPending}
          />
        </form>

        <div className="mt-4 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col items-center gap-4">
          <p className="text-preset-4 text-secondary-text">Or Log in with:</p>
          <div className="py-4 px-5 flex items-center justify-center h-12 rounded-xl border border-neutral-300 dark:border-neutral-600 self-stretch">
            <span className="text-primary-text">
              <GoogleIcon />
            </span>
            <span className="px-4 text-primary-text">Google</span>
          </div>
        </div>

        <div className="mt-4 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col items-center gap-4">
          <p className="text-preset-4 text-secondary-text">
            No account yet?{" "}
            <span className="text-primary-text">
              <Link to={ROUTES.REGISTER}>Register</Link>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};
