import { useEffect, useState } from 'react';
import NotificationService from '../services/notification.service';
import SocketService from '../services/socket.service';

export default function useNotificationCount() {
  const [notificationCount, setNotificationCount] = useState(0);

  const [refresh, triggerRefresh] = useState(0);
  SocketService.boundTriggerToEvent('refresh', triggerRefresh);

  useEffect(() => {
    (async () => setNotificationCount(await NotificationService.getMyNotificationCount()))();
  }, [refresh]);

  return notificationCount;
}
