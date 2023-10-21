import { Notification } from '../../../types/interfaces';

import NotificationItem from './components/NotificationItem';

interface NotificationItemsProps {
  notifications: Notification[];
}

export default function NotificationItems({ notifications, ...props }: NotificationItemsProps) {
  return (
    <div
      {...props}
      className='p-8'>
      {notifications.map((notification, i) => (
        <NotificationItem
          key={i}
          notification={notification}
        />
      ))}
    </div>
  );
}
