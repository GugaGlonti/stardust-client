import Button from '../../../../components/Button';

interface ProfileHeaderRightSideProps {
  ownProfile: boolean;
  loggedIn: boolean;
}

export default function ProfileHeaderRightSide({ ownProfile, loggedIn, ...props }: ProfileHeaderRightSideProps) {
  return (
    <div className='flex items-end gap-4'>
      {!ownProfile && loggedIn && (
        <>
          <Button variant='primary'>Add Friend</Button>
          <Button variant='secondary'>Add Friend</Button>
        </>
      )}
    </div>
  );
}
