import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CheckSquareFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
	return (
		<Navbar bg="light" data-bs-theme="light">
			<Container>
				<div className="d-flex align-items-center">
					<CheckSquareFill color="royalblue" size={50} className="me-2" />
					<Navbar.Brand
						as={Link}
						to="/"
						className="fw-bold ms-2 fs-1 me-5 text-primary text-decoration-underline">
						TODO APP
					</Navbar.Brand>
				</div>
				<Nav className="">
					<Nav.Link as={Link} to="/" className="fw-bold fs-4">
						Home
					</Nav.Link>
					<Nav.Link as={Link} to="/addTodo" className="fw-bold fs-4">
						Add Todo
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};
export default NavigationBar;
