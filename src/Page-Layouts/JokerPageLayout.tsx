import { Outlet } from 'react-router';
import AuthBlock from '../components/AuthBlock';
import useAuthenticate from '../hooks/useAuthenticate';

export default function JokerPageLayout() {
  if (!useAuthenticate()) return <AuthBlock />;

  return (
    <>
      <div className='h-16'>
        <h1>Joker Nav</h1>
      </div>
      <div className='bg-joker-bg h-90vh'>
        <Outlet />
      </div>
    </>
  );
}
