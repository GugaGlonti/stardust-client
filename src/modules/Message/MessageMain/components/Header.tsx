import { useEffect, useState } from 'react';

import { User } from '../../../../types/interfaces';
import UserService from '../../../../services/user.service';
import ProfilePicture from '../../../../components/ProfilePicture';

interface HeaderProps {
  username: string;
}

export default function Header({ username, ...props }: HeaderProps) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setUser(await UserService.getProfile(username));
      setLoading(false);
    })();
  }, [username]);

  if (loading) return <h1 className='p-8'>loading...</h1>;
  if (!user) return <h1 className='p-8'>user could not be fetched</h1>;

  const { firstName, lastName } = user;

  return (
    <div
      className='bg-window-dark w-full rounded-t-2xl'
      {...props}>
      <div className='flex p-4 items-center'>
        <div>
          <ProfilePicture url='' />
        </div>
        <div className='ml-4'>
          <div>
            {firstName} {lastName}
          </div>
          <div className='text-green-500'>@{username}</div>
        </div>
      </div>
    </div>
  );
}
