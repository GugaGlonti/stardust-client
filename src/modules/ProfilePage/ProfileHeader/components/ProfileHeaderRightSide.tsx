import Button from '../../../../components/Button';

interface ProfileHeaderRightSideProps {
  ownProfile: boolean;
  loggedIn: boolean;
  onSendFriendRequest: any;
}

export default function ProfileHeaderRightSide({ ownProfile, loggedIn, onSendFriendRequest, ...props }: ProfileHeaderRightSideProps) {
  /** @drill */
  function sendFriendRequest() {
    onSendFriendRequest();
  }

  return (
    <div
      className='flex items-end gap-4'
      {...props}>
      {!ownProfile && loggedIn && (
        <>
          <Button
            variant='primary'
            onClick={sendFriendRequest}>
            Add Friend
          </Button>
          <Button variant='secondary'>PLACEHOLDER</Button>
        </>
      )}
    </div>
  );
}
