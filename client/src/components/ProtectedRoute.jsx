import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const ProtectedRoute = () => {
  const { isLoggedin, userData } = useContext(AppContext);

  if (!isLoggedin) {
    return <Navigate to="/login" replace />;
  }

  if (!userData?.isAccountVerified) {
        toast.info('Please verify your account to continue ✨')

    return <Navigate to="/" replace />;
    
  }

  return <Outlet />;
};

export default ProtectedRoute;