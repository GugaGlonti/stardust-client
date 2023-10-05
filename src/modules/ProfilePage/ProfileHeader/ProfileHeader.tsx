import ProfilePicture from '../../../assets/svg/ProfilePicture';
import Button from '../../../components/Button';
import { ProfileData } from '../../../types/interfaces';

interface ProfileHeaderProps {
  profileData: ProfileData;
  ownProfile: boolean;
  className?: string;
}

export default function ProfileHeader({ profileData, className, ownProfile, ...props }: ProfileHeaderProps) {
  const { username, firstName, lastName } = profileData as ProfileData;

  return (
    <div
      className={`flex justify-between mx-16 mt-16 p-8 bg-window rounded-2xl ${className}`}
      {...props}>
      {/** @left side */}
      <div className='flex items-end'>
        <ProfilePicture
          height='96'
          className='mx-8'
        />
        <div className='mb-2'>
          <div className='flex gap-1 text-xl'>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
          </div>
          <h1 className='text-green-400'>@{username}</h1>
        </div>
      </div>

      {/** @right side */}
      <div className='flex items-end gap-4'>
        {!ownProfile && (
          <>
            <Button variant='primary'>Add Friend</Button>
            <Button variant='secondary'>Add Friend</Button>
          </>
        )}
      </div>
    </div>
  );
}
