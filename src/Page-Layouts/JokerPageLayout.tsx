import { LoaderFunction, Outlet } from 'react-router';
import AuthBlock from '../components/AuthBlock';
import useAuthenticate from '../hooks/useAuthenticate';
import { removeText } from '../properties';
import JokerService from '../services/joker.service';

// import JokerNav from '../modules/Joker/nav/JokerNav';

export default function JokerPageLayout() {
  if (!useAuthenticate()) return <AuthBlock />;

  return (
    <>
      {
        // <JokerNav />   HEIGH='12' !!!
      }
      <div className='bg-joker-bg h-90vh'>
        <div className='h-12 bg-red-500 overflow-hidden'>{removeText}</div>
        <Outlet />
      </div>
    </>
  );
}

export const GameLoader: LoaderFunction = async () => {
  const game = await JokerService.getGame();
  if (!game) {
    return null;
  }
  return game;
};
