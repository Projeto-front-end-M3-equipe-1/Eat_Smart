import { CommerceProvider } from '../../providers/CommerceProvider';
import { Outlet } from 'react-router-dom';

export const RoutesProtected = () => {
  return (
    <CommerceProvider>
      <Outlet />
    </CommerceProvider>
  );
};
