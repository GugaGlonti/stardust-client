import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './Pages/Layouts/RootLayout';
import HomePage from './Pages/HomePage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';

const router = createBrowserRouter([
    {
        path: '',
        id: 'root',
        element: <RootLayout />,
        errorElement: <h1>Route Not Found.</h1>,
        children: [
            {
                path: 'home',
                id: 'home',
                element: <HomePage />,
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
