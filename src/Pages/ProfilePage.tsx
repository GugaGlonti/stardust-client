import { LoaderFunction, useLoaderData } from 'react-router';
import ProfileAside from '../modules/ProfilePage/ProfileAside/ProfileAside';
import ProfileHeader from '../modules/ProfilePage/ProfileHeader/ProfileHeader';
import ProfileMain from '../modules/ProfilePage/ProfileMain/ProfileMain';
import UserService from '../services/user.service';
import { ProfileData } from '../types/interfaces';

export default function ProfilePage() {
  const profileData = useLoaderData() as ProfileData;

  return (
    <div className='grid grid-cols-8'>
      <ProfileHeader
        profileData={profileData}
        className='col-span-full'
      />
      <ProfileAside
        profileData={profileData}
        className='hd:col-start-2 hd:col-span-2 col-start-1 col-span-3'
      />
      <ProfileMain
        profileData={profileData}
        className='hd:col-span-4 col-span-5'
      />
    </div>
  );
}

export const profilePageLoader: LoaderFunction = async ({ params }) => {
  console.warn('fetching foreign profile data...');

  const { username } = params;
  if (!username) return console.error('No username provided');

  const profile = (await UserService.getProfile(username)) as ProfileData;

  if (!profile) {
    return null;
  }

  return profile;
};
