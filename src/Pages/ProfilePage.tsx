import ProfileAside from '../modules/ProfilePage/ProfileAside/ProfileAside';
import ProfileHeader from '../modules/ProfilePage/ProfileHeader/ProfileHeader';
import ProfileMain from '../modules/ProfilePage/ProfileMain/ProfileMain';
import { LoaderFunction, useLoaderData } from 'react-router';
import UserService, { ProfileData } from '../services/user.service';

export default function ProfilePage() {
  const profiledata = useLoaderData() as ProfileData;

  return (
    <div className='grid grid-cols-8'>
      <ProfileHeader
        profileData={profiledata}
        className='col-span-full'
      />
      <ProfileAside
        profileData={profiledata}
        className='col-start-2 col-span-2'
      />
      <ProfileMain
        profileData={profiledata}
        className='col-span-4'
      />
    </div>
  );
}

export const loadProfileInfo: LoaderFunction = async ({ params }) => {
  console.warn('fetching user');

  const { username } = params;
  if (!username) return console.error('No username provided');
  return (await UserService.getProfile(username)) as ProfileData;
};
