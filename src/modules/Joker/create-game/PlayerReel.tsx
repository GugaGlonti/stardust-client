import Button from '../../../components/Button';
import ProfilePicture from '../../../components/ProfilePicture';
import ColorBar from '../../../components/UTIL/ColorBar';

interface PlayerReelProps {
  players: string[];
}

export default function PlayerReel({ players }: PlayerReelProps) {
  const containerClasses = 'bg-window rounded-md shadow-xl flex flex-col justify-between items-center';

  return (
    <div className={`${containerClasses} mt-16 m-auto max-w-screen-lg w-full h-full`}>
      <ColorBar className='rounded-t-md' />
      <h1 className='m-4'>Waiting for Players...</h1>
      <div className='grid grid-cols-4 p-4 gap-8'>
        {players.map(player => (
          <Player username={player} />
        ))}
        {players.length < 4 && Array.from({ length: 4 - players.length }).map(() => <NoPlayer />)}
      </div>
      <Button
        variant='secondary'
        className='m-4'>
        Start Game
      </Button>
      <ColorBar className='rounded-b-md' />
    </div>
  );
}

function NoPlayer() {
  return (
    <div>
      <ColorBar className='h-full rounded-md shadow-xl relative' />
      <h1 className='relative -top-2/3 flex justify-center items-center text-6xl'>?</h1>
    </div>
  );
}

function Player({ username }: { username: string }) {
  return (
    <div className='bg-secondary-dark rounded-md shadow-xl p-2 flex flex-col justify-between items-center h-full'>
      <ProfilePicture url='' />
      <h1 className='text-gold-light p-2'>@{username}</h1>
    </div>
  );
}
