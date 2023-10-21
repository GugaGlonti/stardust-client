import ProfilePicture from '../../../../assets/svg/ProfilePicture';

interface ProfileHeaderLeftSideProps {
  firstName: string;
  lastName: string;
  username: string;
}

export default function ProfileHeaderLeftSide({ firstName, lastName, username, ...props }: ProfileHeaderLeftSideProps) {
  return (
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
  );
}
