import { Outlet } from 'react-router';
import MessageAside from '../../modules/MessagePage/MessageAside/MessageAside';
import AuthBlock from '../../components/AuthBlock';
import useAuthenticate from '../../hooks/useAuthenticate';

export default function MessagePageLayout() {
  if (!useAuthenticate()) return <AuthBlock />;

  return (
    <div className='h-80vh mt-16 grid grid-cols-10'>
      <MessageAside />
      <Outlet />
    </div>
  );
}
