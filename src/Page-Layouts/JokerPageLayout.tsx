import { Outlet } from 'react-router';
import AuthBlock from '../components/AuthBlock';
import useAuthenticate from '../hooks/useAuthenticate';

// import JokerNav from '../modules/Joker/nav/JokerNav';

export default function JokerPageLayout() {
  if (!useAuthenticate()) return <AuthBlock />;

  return (
    <>
      {
        // <JokerNav />
      }
      <div className='bg-joker-bg h-90vh'>
        <Outlet />
      </div>
    </>
  );
}
