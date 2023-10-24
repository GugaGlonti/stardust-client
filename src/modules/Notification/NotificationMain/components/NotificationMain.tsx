import { useEffect, useState } from 'react';

import NotificationService from '../../../../services/notification.service';
import { Notification } from '../../../../types/Notification';
import NotificationItems from '../../NotificationItem/NotificationItems';
export default function NotificationMain() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setNotifications(await NotificationService.getMyNotifications());
      setLoading(false);
    })();
  }, []);

  if (loading) return <h1 className='p-8'>loading...</h1>;

  return <NotificationItems notifications={notifications} />;
}
