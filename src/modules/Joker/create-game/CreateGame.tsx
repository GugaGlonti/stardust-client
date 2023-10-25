import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import InputField from '../../../components/InputField';
import JokerService from '../../../services/joker.service';
import { useRef } from 'react';
import useCurrentUser from '../../../hooks/useCurrentUser';

export default function CreateGame() {
  const user = useCurrentUser();
  const gameIdRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function createGameHandler() {
    const gameID = await JokerService.createGame(user.username);
    if (!gameID) return console.error('gameID not found');
    navigate(`${gameID}`);
  }

  async function joinGameHandler() {
    const gameID = gameIdRef.current?.value as string;
    if (!gameID) return;
    if (await JokerService.joinLobby(gameID, user.username)) return navigate(`${gameID}`);
    console.error('game does not exist');
  }

  return (
    <div className='h-full m-auto flex justify-center items-center'>
      <div className='bg-window rounded-md max-w-screen-wide p-12 flex flex-col justify-center items-center'>
        <Button
          className='w-full'
          variant='secondary'
          onClick={createGameHandler}>
          Create a new game
        </Button>

        <h1 className='my-8'>or</h1>

        <div className='flex gap-8'>
          <InputField ref={gameIdRef} />
          <Button
            variant='secondary'
            onClick={joinGameHandler}>
            Join a game
          </Button>
        </div>
      </div>
    </div>
  );
}
