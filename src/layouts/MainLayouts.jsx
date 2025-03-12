import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigationBar from '../components/NavigationBar';

const MainLayouts = () => {
	return (
		<>
			<NavigationBar />
			<Outlet />
			<ToastContainer />
		</>
	);
};
export default MainLayouts;
