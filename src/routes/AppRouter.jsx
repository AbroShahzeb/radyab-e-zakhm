import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ROUTES from "../constants/routes";
import {
  ForgotPassword,
  Login,
  Register,
  ResetPassword,
} from "../modules/public/auth";
import { DashborardLayout } from "../layout";
import { Dashboard, Detection, Doctors, History } from "../modules/private";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LANDING} element={<p>Home</p>} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />

        <Route path={ROUTES.DASHBOARD} element={<DashborardLayout />}>
          <Route index replace element={<Navigate to={ROUTES.HOME} />} />
          <Route path={ROUTES.HOME} element={<Dashboard />} />
          <Route path={ROUTES.DETECT} element={<Detection />} />
          <Route path={ROUTES.DOCTORS} element={<Doctors />} />
          <Route path={ROUTES.HISTORY} element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
