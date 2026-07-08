import { createBrowserRouter } from 'react-router-dom';

import Login from './authentication/Login';
import Register from './authentication/Register'
import NotFound from './errors/NotFound';
import App from './App';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [

        ],
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <NotFound />,
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <NotFound />,
    }
]);