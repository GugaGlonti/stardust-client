import PlayerReel from './PlayerReel';

export default function CreateJokerGame() {
  const containerClasses = 'bg-window rounded-md shadow-xl flex flex-col justify-between items-center';

  return (
    <div className='m-auto flex flex-col justify-between gap-32'>
      <div className={`${containerClasses} mt-16 m-auto max-w-screen-lg w-full`}>testasdhaand</div>

      <PlayerReel players={['1', '2']} />
    </div>
  );
}
