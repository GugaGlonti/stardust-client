import { LoaderFunction, Outlet } from 'react-router';
import AuthBlock from '../components/AuthBlock';
import useAuthenticate from '../hooks/useAuthenticate';
import JokerService from '../services/joker.service';
import JokerNav from '../modules/Joker/nav/JokerNav';

// import JokerNav from '../modules/Joker/nav/JokerNav';

export default function JokerPageLayout() {
  if (!useAuthenticate()) return <AuthBlock />;

  return (
    <>
      <div className='bg-joker-bg h-90vh'>
        <JokerNav />
        <Outlet />
      </div>
    </>
  );
}

export const GameLoader: LoaderFunction = async () => {
  const game = await JokerService.getGame();
  if (!game) return null;
  return game;
};
