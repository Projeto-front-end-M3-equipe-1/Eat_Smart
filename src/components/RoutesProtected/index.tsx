import { Navigate, Outlet } from 'react-router-dom';

export const RoutesProtected = () => {
  const userToken = localStorage.getItem('@user:token');
  const userId = localStorage.getItem('@user:id');
  const userCompanyToken = localStorage.getItem('@userCompany:token');

  if (!userToken && !userId) {
    <Navigate to='/' />;
  }
  
  if(!userCompanyToken && !userId) {
    <Navigate to='/' />;
  } 

  return (
      <Outlet />
  );
};
