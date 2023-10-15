import Media from './components/Media';
import Profile from './components/Profile';

export default function MessageProfile() {
  return (
    <div className='bg-window rounded-l-2xl col-start-9 col-span-2 flex flex-col items-center overflow-scroll'>
      <Profile />
      <h1 className='mb-8 text-green-500'>@username</h1>
      <h1 className='m-8'>Shared Media</h1>
      <Media />
    </div>
  );
}
