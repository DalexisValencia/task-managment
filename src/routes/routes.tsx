import { createBrowserRouter } from 'react-router-dom';

import Login from '../authentication/Login';
import Register from '../authentication/Register'
import NotFound from '../errors/NotFound';
import Layout from '../layouts/layout';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
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