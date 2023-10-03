import ProfilePicture from '../../../assets/svg/ProfilePicture';
import { ProfileData } from '../../../types/interfaces';

interface ProfileHeaderProps {
  profileData: ProfileData;
  className?: string;
}

export default function ProfileHeader({ profileData, className, ...props }: ProfileHeaderProps) {
  const { username, firstName, lastName } = profileData as ProfileData;

  return (
    <div
      className={`flex justify-between mx-16 mt-16 p-8 bg-window rounded-2xl ${className}`}
      {...props}>
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

      <div className='flex items-end'></div>
    </div>
  );
}
