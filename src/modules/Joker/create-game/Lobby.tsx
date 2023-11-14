import PlayerReel from './PlayerReel';
import GameSetup from './GameSetup';
import { CreateJokerGameDto, GameMode } from '../../../types/CreateJokerGameDto';
import { useNavigate } from 'react-router';
import JokerService from '../../../services/joker.service';
import useLobbyPlayers from '../hooks/useLobbyPlayers';
import SocketService from '../../../services/socket.service';

export default function JokerLobby() {
  const navigate = useNavigate();
  const gameID = localStorage.getItem('joker-gameID') as string;
  const players = useLobbyPlayers(gameID);

  SocketService.boundTriggerToEvent('joker-start', () => {
    localStorage.setItem('joker-status', 'inGame');
    navigate(`/joker/${gameID}/game`);
  });

  function handleSubmit({ gameMode, roundCount: roundAmount, penalty }: { gameMode: GameMode; roundCount: number; penalty: number }) {
    if (players.length !== 4) return console.error('not enough players');
    const dto: CreateJokerGameDto = { gameID, gameMode, roundAmount, penalty, players: players.join(',') };
    JokerService.startGame(dto);
  }

  if (!gameID) {
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
