import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Calendar3 } from 'react-bootstrap-icons';
import { useContext, useState, useRef } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const InputBar = () => {
	const [title, setTitle] = useState('');
	const [dueDate, setDueDate] = useState('');
	const [category, setCategory] = useState('Personal');
	const setTodos = useContext(TodoContext).setTodos;
	const todos = useContext(TodoContext).todos;
	const navigate = useNavigate();

	const dateInputRef = useRef(null);

	const openDatePicker = () => {
		if (dateInputRef.current) {
			dateInputRef.current.showPicker();
		}
	};

	function addTodo(event) {
		event.preventDefault();
		setTodos([...todos, { id: Date.now(), title, dueDate, category }]);
		setTitle('');
		setDueDate('');
		setCategory('');
		toast.success('Todo item added successfully');
		navigate('/');
	}

	return (
		<>
			<Container className="mt-4 ">
				<Card>
					<Card.Body>
						<Form className="w-100 d-flex" onSubmit={addTodo}>
							<Form.Control
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								size="lg"
								type="text"
								placeholder="Add new..."
								className="border-0 shadow-none"
								required
							/>
							<div className="d-flex align-items-center">
								<Form.Control
									className="me-2"
									type="date"
									value={dueDate}
									onChange={(e) => setDueDate(e.target.value)}
									ref={dateInputRef}
									style={{
										opacity: 0,
										cursor: 'pointer',
										width: '3px',
									}}
								/>
								<Calendar3
									size={50}
									className="me-4 text-primary"
									style={{ cursor: 'pointer' }}
									onClick={openDatePicker}
								/>
							</div>
							<Button
								variant="primary"
								className="px-4 px-lg-5 fw-bold letter-spacing"
								type="submit">
								ADD
							</Button>
						</Form>
					</Card.Body>
				</Card>
			</Container>
		</>
	);
};
export default InputBar;
