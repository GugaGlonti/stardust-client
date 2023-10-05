import Button from '../../../../components/Button';

interface ProfileHeaderRightSideProps {
  ownProfile: boolean;
}

export default function ProfileHeaderRightSide({ ownProfile, ...props }: ProfileHeaderRightSideProps) {
  return (
    <div className='flex items-end gap-4'>
      {!ownProfile && (
        <>
          <Button variant='primary'>Add Friend</Button>
          <Button variant='secondary'>Add Friend</Button>
        </>
      )}
    </div>
  );
}
