import { Routes, Route } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import { MainDashboard } from '../pages/MainDashboard';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { CommerceDashboard } from '../pages/CommerceDashboard';
import { UserDashboard } from '../pages/UserDashboard';
import { RoutesProtected } from '../components/RoutesProtected';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<MainDashboard />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/register' element={<RegisterPage />}></Route>

      <Route element={<RoutesProtected />}>
        <Route path='/companyHome' element={<CommerceDashboard />}></Route>
      </Route>

      <Route path='/userHome' element={<UserDashboard />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
};
