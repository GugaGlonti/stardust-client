import { useContext, useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

import { ChatIdentifier, User } from '../../../../types/interfaces';

import ChatService from '../../../../services/chat.service';

import { FaCheck, FaTrash } from 'react-icons/fa';
import Button from '../../../../components/Button';
import { authContext } from '../../../../store/auth.provider';

interface ProfileHeaderRightSideProps {
  ownProfile: boolean;
  loggedIn: boolean;
  onSendFriendRequest: any;
  isFriend?: boolean;
}

//TODO: GET PENDING FRIEND REQUESTS AND DISPLAY THEM
export default function ProfileHeaderRightSide({ ownProfile, loggedIn, isFriend, onSendFriendRequest, ...props }: ProfileHeaderRightSideProps) {
  const context = useContext(authContext);

  const [isHovering, setIsHovering] = useState(false);
  const [isFriendRequestSent, setIsFriendRequestSent] = useState(false);
  const [chatId, setChatId] = useState<ChatIdentifier>();

  const ownUsername = context.loggedInUser?.username as string;
  const { username } = useLoaderData() as User;

  useEffect(() => {
    if (!loggedIn || ownProfile) return;
    (async () => setChatId(await ChatService.getchatIdentifier(username, ownUsername)))();
  }, [username, ownUsername, loggedIn, ownProfile]);

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
                  <NavLink to={`/messages/${chatId?.id}-${username}`}>
                    <Button
                      variant='primary'
                      className='flex gap-1 items-center'>
                      Send Message
                    </Button>
                  </NavLink>
                  <div
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}>
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
