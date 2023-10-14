import { useEffect, useState } from 'react';

import UserService from '../../../../../services/user.service';

import { Notification, User } from '../../../../../types/interfaces';
import Button from '../../../../../components/Button';
import NotificationService from '../../../../../services/notification.service';

interface FirendRequestProps {
  notification: Notification;
}

export default function FirendRequest({ notification, ...props }: FirendRequestProps) {
  const [sender, setSender] = useState<User>(undefined as unknown as User);
  const [loading, setLoading] = useState<boolean>(true);

  const id = notification.senderId as number;

  useEffect(() => {
    (async () => {
      setSender((await UserService.getProfile(id)) as User);
      setLoading(false);
    })();
  }, [id]);

  function acceptFriendRequest() {
    NotificationService.acceptFriendRequest(notification.id);
    window.location.reload();
  }

  function declineFriendRequest() {
    NotificationService.declineFriendRequest(notification.id);
    window.location.reload();
  }

  if (loading) return <h1 className='p-8'>loading...</h1>;

  return (
    <div
      className='bg-window shadow-xl border border-primary rounded-2xl p-4 mt-4
      flex justify-between items-center'
      {...props}>
      <h1>
        <span className='text-green-500'>@{sender.username}</span> sent you a friend request
      </h1>
      <div className='flex gap-4'>
        <Button
          variant='primary'
          onMouseDown={acceptFriendRequest}>
          Accept
        </Button>
        <Button
          variant='secondary'
          onMouseDown={declineFriendRequest}>
          Decline
        </Button>
      </div>
    </div>
  );
}
