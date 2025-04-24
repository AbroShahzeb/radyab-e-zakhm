import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTES from "../constants/routes";
import {
  ForgotPassword,
  Login,
  Register,
  ResetPassword,
} from "../modules/public/auth";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<p>Home</p>} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};
