import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AddTodo from './Pages/AddTodo';
import MainLayouts from './layouts/MainLayouts';
import useLocalStorage from 'use-local-storage';
import { TodoContext } from './contexts/TodoContext';
import Login from './Pages/Login';
import { useState } from 'react';
import { AuthContext } from './Pages/AuthContext';
import RequireAuth from './components/RequireAuth';

const App = () => {
	const [todos, setTodos] = useLocalStorage('todos', []);
	const [token, setToken] = useState(null);

	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<MainLayouts />}>
					<Route
						index
						element={
							<RequireAuth>
								<HomePage />
							</RequireAuth>
						}
					/>
					<Route
						path="/addTodo"
						element={
							<RequireAuth>
								<AddTodo />
							</RequireAuth>
						}
					/>
				</Route>
				<Route path="/login" element={<Login />} />
			</>
		)
	);

	return (
		<AuthContext.Provider value={{ token, setToken }}>
			<TodoContext.Provider value={{ todos, setTodos }}>
				<RouterProvider router={router} />;
			</TodoContext.Provider>
		</AuthContext.Provider>
	);
};
export default App;
