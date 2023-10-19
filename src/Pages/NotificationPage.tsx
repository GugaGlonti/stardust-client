import AuthBlock from '../components/AuthBlock';
import useAuthenticate from '../hooks/useAuthenticate';
import NotificationWindow from '../modules/NotificationPage/NotificationMain/NotificationWindow';

export default function NotificationPage() {
  if (!useAuthenticate()) return <AuthBlock />;

  return (
    <div className='flex justify-center'>
      <NotificationWindow />
    </div>
  );
}
