import NavButton from './components/NavButton';
import ColorBar from '../../components/UTIL/ColorBar';
import SearchBar from '../SearchBar/SearchBar';

import SignedInNavigation from './components/SignedInNavigation';
import SignedOutNavigation from './components/SignedOutNavigation';
import useCurrentUser from '../../hooks/useCurrentUser';
import useNotificationCount from '../../hooks/useNotificationCount';
import useJokerLink from './hooks/useJokerLink';

export default function RootNavigation() {
  const jokerLink = useJokerLink();
  const { username } = useCurrentUser();
  const notificationCount = useNotificationCount();

  return (
    <>
      {/** @ColoBar */}
      <ColorBar />

      <div className='z-50 h-5vh shadow-lg  flex justify-between items-center px-32 hd:px-96'>
        {/** @Navigation left */}
        <div className='flex justify-between gap-4 h-full'>
          <NavButton to=''>Home</NavButton>
          <NavButton to={jokerLink}>Joker</NavButton>
          <NavButton to='/roulette'>Roulette</NavButton>
        </div>

        {/** @Navigation middle */}
        <div className='z-50 pt-3 w-1/3'>
          <SearchBar />
        </div>

        {/** @Navigation right */}
        <div className='z-50 flex justify-between items-center gap-4 h-full'>
          {!!username ? (
            <SignedInNavigation
              username={username}
              notificationCount={notificationCount}
            />
          ) : (
            <SignedOutNavigation />
          )}
        </div>
      </div>
    </>
  );
}
