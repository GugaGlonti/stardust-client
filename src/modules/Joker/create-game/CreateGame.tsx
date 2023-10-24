import useCurrentUser from '../../../hooks/useCurrentUser';
import PlayerReel from './PlayerReel';
import GameSetup from './GameSetup';

export default function CreateJokerGame() {
  const user = useCurrentUser();

  return (
    <div className='m-auto flex flex-col justify-between gap-32'>
      <GameSetup />
      <PlayerReel players={[user.username]} />
    </div>
  );
}
