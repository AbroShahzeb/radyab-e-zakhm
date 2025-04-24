import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTES from "../constants/routes";
import { Login } from "../modules/public/auth";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<p>Home</p>} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<p>Register</p>} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<p>Forgot Password</p>} />
        <Route path={ROUTES.RESET_PASSWORD} element={<p>Reset Password</p>} />
      </Routes>
    </BrowserRouter>
  );
};
