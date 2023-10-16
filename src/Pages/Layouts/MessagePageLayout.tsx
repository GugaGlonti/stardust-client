import { Outlet } from 'react-router';
import MessageAside from '../../modules/MessagePage/MessageAside/MessageAside';

export default function MessagePageLayout() {
  return (
    <div className='h-80vh mt-16 grid grid-cols-10'>
      <MessageAside />
      <Outlet />
    </div>
  );
}
