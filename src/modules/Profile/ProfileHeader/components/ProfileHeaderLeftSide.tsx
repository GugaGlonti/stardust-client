import ProfilePicture from '../../../../components/ProfilePicture';

interface ProfileHeaderLeftSideProps {
  firstName: string;
  lastName: string;
  username: string;
}

export default function ProfileHeaderLeftSide({ firstName, lastName, username, ...props }: ProfileHeaderLeftSideProps) {
  return (
    <div className='flex items-end gap-8'>
      <div className='w-32 h-32 rounded-xl overflow-hidden border-2 border-yellow-300'>
        <ProfilePicture url='' />
      </div>
      <div className='mb-2'>
        <div className='flex gap-1 text-xl'>
          <h1>{firstName}</h1>
          <h1>{lastName}</h1>
        </div>
        <h1 className='text-green-400'>@{username}</h1>
      </div>
    </div>
  );
}
