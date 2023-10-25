import PlayerReel from './PlayerReel';
import GameSetup from './GameSetup';
import { CreateJokerGameDto, GameMode } from '../../../types/CreateJokerGameDto';
import { useNavigate } from 'react-router';
import JokerService from '../../../services/joker.service';
import useLobbyPlayers from '../hooks/useLobbyPlayers';

export default function JokerLobby() {
  const navigate = useNavigate();
  const createJoker = localStorage.getItem('joker-gameID') as string;
  const players = useLobbyPlayers(createJoker);

  function handleSubmit({ gameMode, roundCount, penalty }: { gameMode: GameMode; roundCount: number; penalty: number }) {
    if (players.length !== 4) return console.error('not enough players');
    const dto: CreateJokerGameDto = {
      gameID: createJoker as string,
      gameMode,
      roundCount,
      penalty,
      players: players.join(','),
    };
    JokerService.startGame(dto);
  }

  if (!createJoker) {
    navigate(`joker`);
    return null;
  }

  return (
    <div className='m-auto flex flex-col justify-between gap-32'>
      <GameSetup onSubmit={handleSubmit} />
      <PlayerReel players={players} />
    </div>
  );
}
