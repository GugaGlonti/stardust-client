import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NavButton from './NavButton';

import NotificationIcon from '../../../assets/svg/NotificationIcon';
import SettingsIcon from '../../../assets/svg/SettingsIcon';
import ChatIcon from '../../../assets/svg/ChatIcon';

export interface SignedInNavigationProps {
  username: string;
  notificationCount: number;
}

export default function SignedInNavigation({ username, notificationCount }: SignedInNavigationProps) {
  const navigate = useNavigate();

  const [isHovering, setIsHovering] = useState<boolean>(false);

  const toProfilePage = () => navigate(`/${username}`);
  const enterHover = () => setIsHovering(true);
  const leaveHover = () => setIsHovering(false);
  function signOutHandler() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (
    <>
      <NavButton to='/notification'>
        <NotificationIcon />
        {!!notificationCount && <div className='bg-secondary-dark h-4 w-4 rounded-full flex justify-center items-center text-white text-xs'>{notificationCount}</div>}
      </NavButton>

      <NavButton to='/messages'>
        <ChatIcon />
      </NavButton>

      <div
        onMouseEnter={enterHover}
        onMouseLeave={leaveHover}>
        <NavButton to={`/${username}`}>{username}</NavButton>

        {!!isHovering && (
          <>
            <div className='h-0' />
            <div className='absolute bg-window rounded-md p-2 shadow-xl'>
              <div
                className='m-1 p-2 hover:bg-secondary-dark rounded-md'
                onClick={toProfilePage}>
                <h1>{username}</h1>
              </div>
              <div
                className='m-1 p-2 hover:bg-secondary-dark rounded-md'
                onClick={signOutHandler}>
                <h1>Sign Out</h1>
              </div>
            </div>
          </>
        )}
      </div>

      <NavButton to='/settings'>
        <SettingsIcon />
      </NavButton>
    </>
  );
}
