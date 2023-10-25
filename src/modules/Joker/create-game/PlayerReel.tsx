import ProfilePicture from '../../../components/ProfilePicture';
import ColorBar from '../../../components/UTIL/ColorBar';
import { window } from '../../../properties';

interface PlayerReelProps {
  players: string[];
}

export default function PlayerReel({ players }: PlayerReelProps) {
  const containerClasses = 'bg-window rounded-md shadow-xl flex flex-col justify-between items-center';

  return (
    <div className={`${window} ${containerClasses} m-auto max-w-screen-lg w-full h-full`}>
      <ColorBar className='rounded-t-md' />
      <h1 className='m-4'>Waiting for other players...</h1>
      <ul className='grid grid-cols-4 p-4 gap-8'>
        {players.map((player, i) => (
          <Player
            key={i}
            username={player}
          />
        ))}
        {players.length < 4 && Array.from({ length: 4 - players.length }).map((_, i) => <NoPlayer key={i} />)}
      </ul>
    </div>
  );
}

function NoPlayer() {
  return (
    <li>
      <ColorBar className='h-full rounded-md shadow-xl relative' />
      <h1 className='relative -top-2/3 flex justify-center items-center text-6xl'>?</h1>
    </li>
  );
}

interface PlayerProps {
  username: string;
}

function Player({ username }: PlayerProps) {
  return (
    <li className='bg-secondary-dark rounded-md shadow-xl p-2 flex flex-col justify-between items-center h-full'>
      <ProfilePicture url='' />
      <h1 className='text-gold-light p-2'>@{username}</h1>
    </li>
  );
}
