<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import { MainDashboard } from '../pages/MainDashboard';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { CommerceDashboard } from '../pages/CommerceDashboard';
import { UserDashboard } from '../pages/UserDashboard';
import Styles from '../components/Styles/Styles';
import { RoutesProtected } from '../components/RoutesProtected';
=======
import { Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { MainDashboard } from "../pages/MainDashboard";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { CommerceDashboard } from "../pages/CommerceDashboard";
import { UserDashboard } from "../pages/UserDashboard";
import Styles from "../components/Styles/Styles";
import { RoutesProtected } from "../components/RoutesProtected";
import { CartProvider } from "../providers/CartProvider";
>>>>>>> 3e57697c78a06b7999227fbe36c679df10bfa72c

export const RoutesMain = () => {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path='/' element={<MainDashboard />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/register' element={<RegisterPage />}></Route>
      <Route path='/userHome' element={<UserDashboard />}></Route>
      <Route path='/styles' element={<Styles />}></Route>

=======
      <Route path="/" element={<MainDashboard />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/userHome" element={<UserDashboard />}></Route>
      <Route path="/styles" element={<Styles />}></Route>
>>>>>>> 3e57697c78a06b7999227fbe36c679df10bfa72c
      <Route element={<RoutesProtected />}>
        <Route path='/companyHome' element={<CommerceDashboard />}></Route>
      </Route>
<<<<<<< HEAD

      <Route path='*' element={<NotFound />}></Route>
=======
      <Route path="*" element={<NotFound />}></Route>
>>>>>>> 3e57697c78a06b7999227fbe36c679df10bfa72c
    </Routes>
  );
};
