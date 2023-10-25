import NotificationHeader from './components/NotificationHeader';
import NotificationMain from './components/NotificationMain';
import useNotificationCount from '../../../hooks/useNotificationCount';

interface NotificationMainProps {}

export default function NotificationWindow({ ...props }: NotificationMainProps) {
  // const notificationCount = useNotificationCount();

  const notificationCount = useNotificationCount();

  return (
    <div
      className='bg-window w-1/2 my-16 rounded-2xl'
      {...props}>
      <NotificationHeader notificationCount={notificationCount} />
      {!!notificationCount && <NotificationMain />}
    </div>
  );
}
