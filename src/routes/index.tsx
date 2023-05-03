import { Routes, Route } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import { MainDashboard } from '../pages/MainDashboard';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { CommerceDashboard } from '../pages/CommerceDashboard';
import { UserDashboard } from '../pages/UserDashboard';
import Styles from '../components/Styles/Styles';
import { RoutesProtected } from '../components/RoutesProtected';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<MainDashboard />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/signin' element={<LoginPage />}></Route>
      <Route path='/register' element={<RegisterPage />}></Route>
      <Route path='/userHome' element={<UserDashboard />}></Route>
      <Route path='/styles' element={<Styles />}></Route>

      <Route element={<RoutesProtected />}>
        <Route path='/signin' element={<LoginPage />}></Route>
        <Route path='/signup' element={<RegisterPage />}></Route>
        <Route path='/companyHome' element={<CommerceDashboard />}></Route>
      </Route>
<<<<<<< HEAD

=======
>>>>>>> d235a65c4032b9bf16b198a37dfb143b83946d24
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
};
