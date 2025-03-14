import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Pages/AuthContext';

const RequireAuth = ({ children }) => {
	const token = useContext(AuthContext).token;

	if (!token) {
		return <Navigate to="/login" replace />;
	}
	return children;
};
export default RequireAuth;
