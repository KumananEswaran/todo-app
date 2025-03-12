import { useContext, useState } from 'react';
import { Card, Container, Button, Form, Modal } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import { TodoContext } from '../contexts/TodoContext';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	const { todos, setTodos } = useContext(TodoContext);
	const [editId, setEditId] = useState(null);
	const [editTitle, setEditTitle] = useState('');
	const [editDueDate, setEditDueDate] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [todoToDelete, setTodoToDelete] = useState(null);
	const { setToken } = useContext(AuthContext);
	const navigate = useNavigate();

	// Handle delete function
	const confirmDelete = () => {
		setTodos(todos.filter((todo) => todo.id !== todoToDelete));
		setShowModal(false);
	};

	const handleShowModal = (id) => {
		setTodoToDelete(id);
		setShowModal(true);
	};

	// Handle edit function
	const editTodo = (id, title, dueDate) => {
		setEditId(id);
		setEditTitle(title);
		setEditDueDate(dueDate);
	};

	// Handle update function
	const updateTodo = () => {
		setTodos(
			todos.map((todo) =>
				todo.id === editId
					? { ...todo, title: editTitle, dueDate: editDueDate }
					: todo
			)
		);
		setEditId(null);
		setEditTitle('');
		setEditDueDate('');
	};

	// Logout function
	const handleLogout = () => {
		setToken(null);
		localStorage.removeItem('token');
		navigate('/login');
	};

	return (
		<Container className="mt-4">
			<div className="d-flex justify-content-between mb-3">
				<h2>Your Todos</h2>
				<Button variant="danger" onClick={handleLogout}>
					Logout
				</Button>
			</div>
			{todos.length > 0 ? (
				todos.map((todo) => (
					<Card
						key={todo.id}
						className="mb-2 p-3 d-flex flex-row justify-content-between align-items-center">
						<div>
							{editId === todo.id ? (
								<>
									<Form.Control
										type="text"
										value={editTitle}
										onChange={(e) => setEditTitle(e.target.value)}
										className="me-2"
									/>
									<Form.Control
										type="date"
										value={editDueDate}
										onChange={(e) => setEditDueDate(e.target.value)}
										className="me-2"
									/>
								</>
							) : (
								<>
									<strong>{todo.title}</strong> <br />
									<small className="text-muted">Due: {todo.dueDate}</small>
								</>
							)}
						</div>

						<div>
							{editId === todo.id ? (
								<Button variant="success" className="me-2" onClick={updateTodo}>
									Update
								</Button>
							) : (
								<>
									<Button
										variant="outline-primary"
										className="me-2"
										onClick={() => editTodo(todo.id, todo.title, todo.dueDate)}>
										<PencilSquare size={20} />
									</Button>
									<Button
										variant="outline-danger"
										onClick={() => handleShowModal(todo.id)}>
										<Trash size={20} />
									</Button>
								</>
							)}
						</div>
					</Card>
				))
			) : (
				<Card className="p-3 text-center">No todos available</Card>
			)}

			<Modal show={showModal} onHide={() => setShowModal(false)} centered>
				<Modal.Header closeButton>
					<Modal.Title>Confirm Deletion</Modal.Title>
				</Modal.Header>
				<Modal.Body>Are you sure you want to delete this todo?</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShowModal(false)}>
						Cancel
					</Button>
					<Button variant="danger" onClick={confirmDelete}>
						Yes, Delete
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
};

export default HomePage;
