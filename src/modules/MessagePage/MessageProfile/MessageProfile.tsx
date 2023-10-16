import { useEffect, useState } from 'react';
import { LoaderFunction, useLoaderData } from 'react-router';

import { User } from '../../../types/interfaces';

import UserService from '../../../services/user.service';

import Media from './components/Media';
import Profile from './components/Profile';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

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

  return (
    <div className='bg-window rounded-l-2xl col-start-9 col-span-2 flex flex-col items-center overflow-scroll'>
      <Profile />
      <h1 className='mx-8 text-green-500'>@{username}</h1>
      <NavLink to={`/${username}`}>
        <div className='flex items-center gap-2'>
          <h1>Go To Profile</h1>
          <FaArrowRight />
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
