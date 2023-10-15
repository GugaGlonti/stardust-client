import { useContext } from 'react';
import { LoaderFunction, useLoaderData } from 'react-router';

import UserService from '../services/user.service';

import { User } from '../types/interfaces';

import { authContext } from '../store/auth.provider';

import ProfileHeader from '../modules/ProfilePage/ProfileHeader/ProfileHeader';
import ProfileAside from '../modules/ProfilePage/ProfileAside/ProfileAside';
import ProfileMain from '../modules/ProfilePage/ProfileMain/ProfileMain';

export default function ProfilePage() {
  const profileData = useLoaderData() as User;
  const context = useContext(authContext);
  if (!profileData) return null;

  const { loggedInUser } = context;

  const ownProfile = loggedInUser?.username === profileData.username;
  const loggedIn = !!loggedInUser;
  const isFriend = loggedInUser?.friends?.includes(profileData.username) || false;

  return (
    <div className='grid grid-cols-8'>
      <ProfileHeader
        profileData={profileData}
        ownProfile={ownProfile}
        loggedIn={loggedIn}
        isFriend={isFriend}
        className='col-span-full'
      />
      <ProfileAside
        profileData={profileData}
        ownProfile={ownProfile}
        className='hd:col-start-2 hd:col-span-2 col-start-1 col-span-3'
      />
      <ProfileMain className='hd:col-span-4 col-span-5 h-max' />
    </div>
  );
}

export const profilePageLoader: LoaderFunction = async ({ params }) => {
  console.warn('fetching profile page data...');

  const { username } = params;
  if (!username) return console.error('No username provided');

  const profile = (await UserService.getProfile(username)) as User;
  if (!profile) return null;

  return profile;
};
