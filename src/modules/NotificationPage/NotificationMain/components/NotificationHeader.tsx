import { FaBell } from 'react-icons/fa';

interface NotificationHeaderProps {
  notificationCount: number;
}

export default function NotificationHeader({ notificationCount, ...props }: NotificationHeaderProps) {
  let classes = 'bg-window rounded-2xl p-8 flex gap-4';
  if (notificationCount) classes += ' shadow-lg';

  return (
    <div
      className={classes}
      {...props}>
      <FaBell className='text-2xl' />
      <div className='flex gap-1'>
        <NotificationNumber count={notificationCount} />
        <NotificationMessage count={notificationCount} />
      </div>
    </div>
  );
}

function NotificationNumber({ count }: { count: number }) {
  let content = '';
  if (!count) content = 'No';
  else content = '' + count;
  return <h1 className='text-gray-300'>{content}</h1>;
}

function NotificationMessage({ count }: { count: number }) {
  if (count === 1) return <h1>New Notification</h1>;
  return <h1>New Notifications</h1>;
}
