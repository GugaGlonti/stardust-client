import { useRef } from 'react';
import Button from '../../../components/Button';
import InputField from '../../../components/InputField';
import { window } from '../../../properties';
interface GameSetupProps {
  onSubmit: (data: any) => void;
}

export default function GameSetup({ onSubmit, ...props }: GameSetupProps) {
  const modeRef = useRef<HTMLInputElement>(null);
  const roundRef = useRef<HTMLInputElement>(null);
  const penaltyRef = useRef<HTMLInputElement>(null);

  const containerClasses = 'bg-window rounded-md shadow-xl flex flex-col justify-between items-center';

  function submitHandler(e: any) {
    e.preventDefault();
    console.table({
      mode: modeRef.current?.value,
      round: roundRef.current?.value,
      penalty: penaltyRef.current?.value,
    });
    onSubmit({});
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
            ref={roundRef}
            label='Rounds'
            placeholder='4'
            defaultValue={4}
          />

          <InputField
            ref={penaltyRef}
            label='Penalty'
            placeholder='200'
            defaultValue={200}
          />

          <div className='col-span-2 flex justify-center'>
            <Button
              variant='secondary'
              className='m-4'
              type='submit'>
              Start Game
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
