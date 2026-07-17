import { createBrowserRouter } from 'react-router-dom';

import Login from '../auth/pages/Login';
import Register from '../auth/pages/Register'
import NotFound from '../errors/NotFound';
import Layout from '../layouts/layout';
import Dashboard from '../dashboard/pages/Dashboard';
import TaskDetail from '../tasks/pages';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/task-detail/:id",
                element: <TaskDetail />,
            },
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