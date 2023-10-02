import { useState } from 'react';
import { NavLink, useNavigate, useRouteLoaderData } from 'react-router-dom';

import NavButton from './components/NavButton';
import ColorBar from '../../components/UTIL/ColorBar';
import Button from '../../components/Button';

import NotificationIcon from '../../assets/svg/NotificationIcon';
import SettingsIcon from '../../assets/svg/SettingsIcon';
import ChatIcon from '../../assets/svg/ChatIcon';

import { ProfileData } from '../../services/user.service';
import SearchBar from '../SearchBar/SearchBar';

export default function RootNavigation() {
  const loggedInUser = useRouteLoaderData('root') as ProfileData;
  const username = loggedInUser?.username;

  const isSignedIn: boolean = !!loggedInUser;

  return (
    <>
      {/** @ColoBar */}
      <ColorBar />

      <div className='h-16 shadow-lg px-96 flex justify-between items-center'>
        {/** @Navigation left */}
        <div className='flex justify-between gap-4 h-full'>
          <NavButton to=''>Home</NavButton>
          <NavButton to='/joker'>Joker</NavButton>
          <NavButton to='/roulette'>Roulette</NavButton>
        </div>

        {/** @Navigation middle */}
        <div className='pt-3 w-1/3'>
          <SearchBar />
        </div>

        {/** @Navigation right */}
        <div className='flex justify-between items-center gap-4 h-full'>{!!isSignedIn ? <SignedInNavigation username={username} /> : signedOutNavigation}</div>
      </div>
    </>
  );
}

interface SignedInNavigationProps {
  username: string;
}

const SignedInNavigation = function ({ username }: SignedInNavigationProps) {
  const navigate = useNavigate();

  const [isHovering, setIsHovering] = useState<boolean>(false);

  function signOutHandler() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  function toProfilePage() {
    navigate(`/${username}`);
  }

  function enterHover() {
    setIsHovering(true);
  }

  function leaveHover() {
    setIsHovering(false);
  }

  return (
    <>
      <NavButton to='/notification'>
        <NotificationIcon />
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
};

const signedOutNavigation = (
  <>
    <NavLink to='/signin'>
      <Button variant='primary'>Sign In</Button>
    </NavLink>
    <NavLink to='/signup'>
      <Button variant='secondary'>Sign Up</Button>
    </NavLink>
  </>
);
