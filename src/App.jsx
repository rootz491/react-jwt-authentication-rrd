import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoute";
import Home from "./pages/home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "login",
		element: (
			<>
				<h1>Please log in</h1>
				<p>This is where you authenticate and get a session or jwt.</p>
			</>
		),
	},
	{
		element: <ProtectedRoutes />,
		children: [
			{
				path: "admin",
				element: (
					<>
						<p>This is admin page.</p>
					</>
				),
			},
			{
				path: "user",
				element: (
					<>
						<p>This is user page.</p>
					</>
				),
			},
			{
				path: "guest",
				element: (
					<>
						<p>This is guest page.</p>
					</>
				),
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
