import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Homepage />,
		},
		{
			path: '/about',
			element: <About />,
		},
		{
			path: '/contact',
			element: <Contact />,
		},
	]);
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
