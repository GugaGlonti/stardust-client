import { useEffect, useState } from 'react';
import { LoaderFunction, useLoaderData } from 'react-router';
import { NavLink } from 'react-router-dom';

import { User } from '../../../types/User';

import UserService from '../../../services/user.service';

import { FaArrowRight } from 'react-icons/fa';

import Media from './components/Media';
import Profile from './components/Profile';

export default function MessageProfile() {
  const messageProfileLoaderData = useLoaderData() as string;
  const username = messageProfileLoaderData[1];

  const [friend, setFriend] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setFriend(await UserService.getProfile(username));
      setLoading(false);
    })();
  }, [username]);

  if (loading) return <h1 className='p-8'>loading...</h1>;
  if (!friend) return <h1 className='p-8'>friend could not be fetched</h1>;

  const { firstName, lastName } = friend;

  return (
    <div className='bg-window rounded-l-2xl col-start-9 col-span-2 flex flex-col items-center overflow-scroll'>
      <Profile />
      <h1>
        {firstName} {lastName}
      </h1>
      <h1 className='mx-8 b-8 text-green-500'>@{username}</h1>

      <NavLink to={`/${username}`}>
        <div className='flex items-center gap-2'>
          <h1 className='text-xs text-gray-300'>Go To Profile</h1>
          <FaArrowRight className='text-gray-300' />
        </div>
      </NavLink>
      <h1 className='m-8'>Shared Media</h1>
      <Media />
    </div>
  );
}

export const messageProfileLoader: LoaderFunction = async ({ params }) => {
  if (!params.chatId) return {};
  return params.chatId.split('-');
};
