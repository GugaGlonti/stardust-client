import { Outlet } from 'react-router';
import RootNavigation from '../../modules/Navigation/RootNavigation';

export default function RootLayout() {
    return (
        <>
            <RootNavigation />
            <Outlet />
        </>
    );
}
