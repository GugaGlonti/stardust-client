import { LoaderFunction, Outlet } from 'react-router';
import RootNavigation from '../../modules/Navigation/RootNavigation';
import Footer from '../../modules/Footer/Footer';
import axiosService from '../../services/axios.instance';

export default function RootLayout() {
  return (
    <>
      <RootNavigation />
      <Outlet />
      <Footer />
    </>
  );
}

export const getLoggedInUser: LoaderFunction = async ({ request, params }) => {
  const response = await axiosService.get('/auth/me');
  return response.data;
};
