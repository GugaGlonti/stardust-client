import { Outlet } from 'react-router';
import RootNavigation from '../../modules/Navigation/RootNavigation';
import Footer from '../../modules/Footer/Footer';

export default function RootLayout() {
    return (
        <>
            <RootNavigation />
            <Outlet />
            <Footer />
        </>
    );
}
