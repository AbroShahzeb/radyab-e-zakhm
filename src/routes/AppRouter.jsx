import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTES from "../constants/routes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<p>Home</p>} />
        <Route path={ROUTES.SIGNIN} element={<p>Signin</p>} />
        <Route path={ROUTES.SIGNUP} element={<p>Signup</p>} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<p>Forgot Password</p>} />
        <Route path={ROUTES.RESET_PASSWORD} element={<p>Reset Password</p>} />
      </Routes>
    </BrowserRouter>
  );
};
