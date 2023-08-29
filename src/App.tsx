import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './Pages/Layouts/RootLayout';
import HomePage from './Pages/HomePage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import JokerPage from './Pages/JokerPage';
import RoulettePage from './Pages/RoulettePage';
import ProfilePage from './Pages/ProfilePage';
import SettingsPage from './Pages/SettingsPage';

const router = createBrowserRouter([
    {
        path: '',
        id: 'root',
        element: <RootLayout />,
        errorElement: <h1>Route Not Found.</h1>,
        children: [
            {
                path: '',
                id: 'home',
                element: <HomePage />,
            },
            {
                path: 'joker',
                id: 'joker',
                element: <JokerPage />,
            },
            {
                path: 'roulette',
                id: 'roulette',
                element: <RoulettePage />,
            },
            {
                path: 'profile',
                id: 'profile',
                element: <ProfilePage />,
            },
            {
                path: 'settings',
                id: 'settings',
                element: <SettingsPage />,
            },
        ],
    },
    {
        path: 'signin',
        element: <SignInPage />,
        errorElement: <h1>Route Not Found</h1>,
    },
    {
        path: 'signup',
        element: <SignUpPage />,
        errorElement: <h1>Route Not Found</h1>,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
