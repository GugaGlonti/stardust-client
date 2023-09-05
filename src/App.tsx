import { RouterProvider, useRouteError } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import RootLayout, { getLoggedInUser } from './Pages/Layouts/RootLayout';
import HomePage from './Pages/HomePage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import JokerPage from './Pages/JokerPage';
import RoulettePage from './Pages/RoulettePage';
import ProfilePage, { loadProfileInfo } from './Pages/ProfilePage';
import SettingsPage from './Pages/SettingsPage';
import MessagesPage from './Pages/MessagesPage';
import NotificationsPage from './Pages/NotificationsPage';

//prettier-ignore
const router = createBrowserRouter([
    {
        path: '', id: 'root', element: <RootLayout />, errorElement: <ErrorBoundary/>,
        loader: getLoggedInUser,
        children: [
            /** @page Home Page */
            {   path: '',             id: 'home',         element: <HomePage /> },

            /** @page Joker Game */
            {   path: 'joker',        id: 'joker',        element: <JokerPage /> },

            /** @page Roulette Game */
            {   path: 'roulette',     id: 'roulette',     element: <RoulettePage /> },

            /** @page Notifications Page */
            {   path: 'notification', id: 'notification', element: <NotificationsPage /> },

            /** @page Messages Page */
            {   path: 'messages',     id: 'messages',     element: <MessagesPage /> },

            /** @page Profile Page */
            {   path: ':username',      id: 'profile',      element: <ProfilePage />,
                loader: loadProfileInfo },

            /** @page Settings Page */
            { path: 'settings',     id: 'settings',     element: <SettingsPage /> },
        ],
    },
    { path: 'signin', element: <SignInPage />,errorElement: <h1>Route Not Found</h1> },
    { path: 'signup', element: <SignUpPage />, errorElement: <h1>Route Not Found</h1> },
]);

export default function App() {
    return <RouterProvider router={router} />;
}

function ErrorBoundary() {
    const error = useRouteError() as Error;
    return <div className="text-xl">{error.message}</div>;
}
