import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuth } from '../../store/selectors';

export const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useSelector(getAuth);
  
  if (isLoggedIn) return children;
	
  return <Navigate to='/login' />
};