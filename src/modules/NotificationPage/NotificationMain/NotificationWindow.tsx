import { useContext } from 'react';

import NotificationHeader from './components/NotificationHeader';
import NotificationMain from './components/NotificationMain';
import { authContext } from '../../../store/auth.provider';

interface NotificationMainProps {}

export default function NotificationWindow({ ...props }: NotificationMainProps) {
  const context = useContext(authContext);

  const notificationCount = context.loggedInUser?.notificationCount as number;

  return (
    <div
      className='bg-window w-1/2 mt-16 rounded-2xl'
      {...props}>
      <NotificationHeader notificationCount={notificationCount} />
      <NotificationMain />
    </div>
  );
}
