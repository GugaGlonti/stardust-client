import { useContext } from 'react';
import { authContext } from '../../store/auth.provider';

import NavButton from './components/NavButton';
import ColorBar from '../../components/UTIL/ColorBar';
import SearchBar from '../SearchBar/SearchBar';

import SignedInNavigation from './components/SignedInNavigation';
import SignedOutNavigation from './components/SignedOutNavigation';

export default function RootNavigation() {
  const context = useContext(authContext);

  const { loggedInUser: user } = context;
  let username = user?.username || '';
  let loggedIn = username !== '';

  return (
    <>
      {/** @ColoBar */}
      <ColorBar />

      <div className='h-16 shadow-lg  flex justify-between items-center px-32 hd:px-96'>
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
        <div className='flex justify-between items-center gap-4 h-full'>{!!loggedIn ? <SignedInNavigation username={username} /> : <SignedOutNavigation />}</div>
      </div>
    </>
  );
}
