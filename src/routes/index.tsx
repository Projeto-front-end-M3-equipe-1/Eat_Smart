import { Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { MainDashboard } from "../pages/MainDashboard";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { CommerceDashboard } from "../pages/CommerceDashboard";
import { UserDashboard } from "../pages/UserDashboard";
import Styles from "../components/Styles/Styles";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<MainDashboard />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/companyHome" element={<CommerceDashboard />}></Route>
      <Route path="/userHome" element={<UserDashboard />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/styles" element={<Styles />}></Route>
    </Routes>
  );
};
