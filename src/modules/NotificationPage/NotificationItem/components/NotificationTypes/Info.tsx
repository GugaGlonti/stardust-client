import Button from '../../../../../components/Button';
import NotificationService from '../../../../../services/notification.service';
import { Notification } from '../../../../../types/interfaces';

interface InfoProps {
  notification: Notification;
}

export default function Info({ notification, ...props }: InfoProps) {
  function dismissNotification() {
    NotificationService.deleteNotification(notification.id);
    window.location.reload();
  }

  return (
    <div
      className='bg-window shadow-xl border border-primary rounded-2xl p-4 mt-4
    flex justify-between items-center'
      {...props}>
      {notification.body}
      <Button
        variant='primary'
        onMouseDown={dismissNotification}>
        Dismiss
      </Button>
    </div>
  );
}
