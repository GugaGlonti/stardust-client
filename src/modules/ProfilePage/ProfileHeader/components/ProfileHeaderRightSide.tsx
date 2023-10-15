import { FaCheck, FaTrash } from 'react-icons/fa';
import Button from '../../../../components/Button';
import { useState } from 'react';

interface ProfileHeaderRightSideProps {
  ownProfile: boolean;
  loggedIn: boolean;
  onSendFriendRequest: any;
  isFriend?: boolean;
}

//TODO: GET PENDING FRIEND REQUESTS AND DISPLAY THEM
export default function ProfileHeaderRightSide({ ownProfile, loggedIn, isFriend, onSendFriendRequest, ...props }: ProfileHeaderRightSideProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [isFriendRequestSent, setIsFriendRequestSent] = useState(false);

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  function sendFriendRequest() {
    setIsFriendRequestSent(true);
    onSendFriendRequest();
  }

  function cancelFriendRequest() {
    setIsFriendRequestSent(false);
  }

  return (
    <div
      className='flex items-end gap-4'
      {...props}>
      {!!loggedIn && (
        <>
          {!ownProfile && (
            <>
              {!!isFriend && (
                <>
                  <Button
                    variant='primary'
                    className='flex gap-1 items-center'>
                    Send Message
                  </Button>
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    {!isHovering ? (
                      <Button
                        variant='primary'
                        className='flex gap-1 items-center'>
                        Friends <FaCheck />
                      </Button>
                    ) : (
                      <Button
                        variant='primary'
                        className='flex gap-1 items-center'>
                        Throw Friend In The Trash <FaTrash />
                      </Button>
                    )}
                  </div>
                </>
              )}
              {!isFriend && (
                <>
                  {!isFriendRequestSent && (
                    <Button
                      variant='primary'
                      onClick={sendFriendRequest}>
                      Add Friend
                    </Button>
                  )}
                  {!!isFriendRequestSent && (
                    <Button
                      variant='primary'
                      onClick={cancelFriendRequest}>
                      Pending...
                    </Button>
                  )}
                </>
              )}
            </>
          )}
          {!!ownProfile && (
            <>
              <Button variant='primary'>Edit Profile</Button>
            </>
          )}
        </>
      )}
    </div>
  );
}
