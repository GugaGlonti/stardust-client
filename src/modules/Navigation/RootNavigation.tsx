import { ReactNode } from 'react';
import { NavLink, useRouteLoaderData } from 'react-router-dom';

import NavButton from './components/NavButton';
import ColorBar from '../../components/UTIL/ColorBar';
import Button from '../../components/Button';

import NotificationIcon from '../../assets/svg/NotificationIcon';
import SettingsIcon from '../../assets/svg/SettingsIcon';
import ChatIcon from '../../assets/svg/ChatIcon';

import { ProfileData } from '../../services/user.service';

export default function RootNavigation() {
  const loggedInUser = useRouteLoaderData('root') as ProfileData;
  const username = loggedInUser?.username;

  const isSignedIn = !!loggedInUser;

  return (
    <>
      {/** @ColoBar */}
      <ColorBar />

      <div className='h-16 shadow-lg px-96 flex justify-between'>
        {/** @Navigation left side */}
        <div className='flex justify-between gap-4 h-full'>
          <NavButton to=''>Home</NavButton>
          <NavButton to='/joker'>Joker</NavButton>
          <NavButton to='/roulette'>Roulette</NavButton>
        </div>

        {/** @Navigation right side */}
        <div className='flex justify-between items-center gap-4 h-full'>{!!isSignedIn ? signedInNavigation(username) : signedOutNavigation}</div>
      </div>
    </>
  );
}

const signedInNavigation = function (username: string): ReactNode {
  return (
    <>
      <NavButton to='/notification'>
        <NotificationIcon />
      </NavButton>

      <NavButton to='/messages'>
        <ChatIcon />
      </NavButton>

      <NavButton to={`/${username}`}>{username}</NavButton>

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
