import { Outlet } from 'react-router';
import RootNavigation from '../components/Navigation/RootNavigation';

export default function RootLayout() {
    return (
        <>
            <RootNavigation />
            <Outlet />
        </>
    );
}
