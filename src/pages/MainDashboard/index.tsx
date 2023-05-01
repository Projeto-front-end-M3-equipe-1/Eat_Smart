import { MainDashboardComponent } from '../../components/MainDashboard';
import { UserContext } from '../../providers/UserContext/UserContext';
import { useContext } from 'react';
import { LoginModal } from '../../components/LoginModal';

export const MainDashboard = () => {
  const { isModalOpen } = useContext(UserContext);
  return (
    <>
      {isModalOpen ? <LoginModal /> : null}
      <MainDashboardComponent />
    </>
  );
};
