import { Notification } from '../../../../types/interfaces';
import { NotificationEnum } from '../../../../types/notification.enum';
import FirendRequest from './NotificationTypes/FirendRequest';
import Info from './NotificationTypes/Info';

interface NotificationItemProps {
  notification: Notification;
}

export default function NotificationItem({ notification, ...props }: NotificationItemProps) {
  switch (notification.type) {
    case NotificationEnum.FRIEND_REQUEST:
      return <FirendRequest notification={notification} />;

    case NotificationEnum.INFO:
      return <Info notification={notification} />;

    default:
      return <div>NOTIFICATION TYPE DOES NOT EXIST</div>;
  }
}
