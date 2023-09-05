import { LoaderFunction, Outlet } from 'react-router';
import RootNavigation from '../../modules/Navigation/RootNavigation';
import Footer from '../../modules/Footer/Footer';
import axios from 'axios';

export default function RootLayout() {
    return (
        <>
            <RootNavigation />
            <Outlet />
            <Footer />
        </>
    );
}

export const getLoggedInUser: LoaderFunction = async ({ params }) => {
    const data = axios.get('http://localhost:3000/api/auth/me', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return (await data).data;
};
