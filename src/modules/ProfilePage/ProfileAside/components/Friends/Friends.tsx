import { useEffect, useState } from 'react';
import { User } from '../../../../../types/interfaces';
import UserService from '../../../../../services/user.service';
import Friend from './Friend';

interface FriendsProps {}

export default function Friends({ ...props }: FriendsProps) {
  const [friends, setFriends] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      console.warn('fetching friends');
      setFriends(await UserService.getFriends());
      setLoading(false);
    })();
  }, []);

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
