import { Outlet } from 'react-router';
import RootNavigation from '../UTIL/Navigation/RootNavigation';

export default function RootLayout() {
    return (
        <>
            <RootNavigation />

            <Outlet />
        </>
    );
}
