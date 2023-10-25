import { useRef } from 'react';
import Button from '../../../components/Button';
import InputField from '../../../components/InputField';
import { window } from '../../../properties';
import SelectField from '../../../components/SelectField';
import { GameMode } from '../../../types/CreateJokerGameDto';
import { useNavigate } from 'react-router';
import JokerService from '../../../services/joker.service';
import useCurrentUser from '../../../hooks/useCurrentUser';
import CopyField from '../../../components/CopyField';
interface GameSetupProps {
  onSubmit: (data: any) => void;
}

export default function GameSetup({ onSubmit, ...props }: GameSetupProps) {
  const user = useCurrentUser();
  const navigate = useNavigate();
  const gameModeRef = useRef<HTMLSelectElement>(null);
  const roundCountRef = useRef<HTMLInputElement>(null);
  const penaltyRef = useRef<HTMLInputElement>(null);

  const gameId = localStorage.getItem('joker-gameID') as string;

  const containerClasses = 'bg-window rounded-md shadow-xl flex flex-col justify-between items-center';

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({
      gameMode: gameModeRef.current?.value.toLowerCase() as GameMode,
      roundCount: roundCountRef.current?.value,
      penalty: penaltyRef.current?.value,
    });
  }

  function leaveHandler() {
    JokerService.leaveLobby(user.username);
    navigate('/joker');
  }

  return (
    <>
      <div
        className={`${window} ${containerClasses}
        mt-16 m-auto w-full`}
        {...props}>
        <h1 className='my-8'>Set up the Game</h1>

        <form
          className='grid grid-cols-2 gap-4 w-full px-8'
          onSubmit={submitHandler}>
          <InputField
            ref={roundCountRef}
            label='Rounds'
            type='number'
            placeholder='4'
            defaultValue={4}
          />

          <SelectField
            ref={gameModeRef}
            label='Select Gamemode'
            options={['Classical', 'Nines']}
          />

          <InputField
            ref={penaltyRef}
            label='Penalty'
            type='number'
            placeholder='200'
            defaultValue={200}
          />

          <CopyField
            label='Game ID'
            text={gameId}
          />

          <div className='col-span-2 flex justify-center'>
            <Button
              variant='secondary'
              className='m-4 w-full'
              onClick={leaveHandler}>
              Leave Lobby
            </Button>
            <Button
              variant='primary'
              className='m-4 w-full'
              type='submit'>
              Start Game
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
