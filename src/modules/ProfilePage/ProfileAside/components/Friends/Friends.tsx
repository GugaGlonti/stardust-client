import { useEffect, useState } from 'react';

import { User } from '../../../../../types/interfaces';
import UserService from '../../../../../services/user.service';

import Friend from './Friend';

interface FriendsProps {
  profileData: User;
}

export default function Friends({ profileData, ...props }: FriendsProps) {
  const [friends, setFriends] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { username } = profileData;

  useEffect(() => {
    (async () => {
      console.warn('fetching friends');
      setFriends(await UserService.getFriends(username));
      setLoading(false);
    })();
  }, [username]);

  if (loading) return <h1 className='p-8'>loading...</h1>;

  return (
    <>
      <div className='my-8'>Friends ({friends.length})</div>

      <div
        className='grid grid-cols-3'
        {...props}>
        {friends.map((friend, i) => (
          <Friend
            friend={friend}
            key={i}
          />
        ))}
      </div>
    </>
  );
}
