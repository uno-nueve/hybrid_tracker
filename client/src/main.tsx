import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from './pages/Home/HomePage.tsx';
import { Login } from './pages/Login/LoginPage.tsx';
import { Setup } from './pages/Setup/SetupPage.tsx';
import { Overview } from './pages/Overview/OverviewPage.tsx';
import { Calendar } from './pages/Calendar/CalendarPage.tsx';
import { Dashboard } from './pages/Dashboard/DashboardPage.tsx';
import { ErrorPage } from './components/ErrorPage.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/setup',
        element: <Setup />,
    },
    {
        path: '/overview',
        element: <Overview />,
    },
    {
        path: '/calendar',
        element: <Calendar />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
