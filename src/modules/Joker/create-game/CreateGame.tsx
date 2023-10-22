import ProfilePicture from '../../../components/ProfilePicture';

export default function CreateJokerGame() {
  const containerClasses = 'bg-window rounded-md shadow-xl p-2 flex flex-col justify-between items-center';

  return (
    <div className='w-3/4 m-auto h-5/6 flex flex-col justify-between'>
      <div className={`${containerClasses} h-3/6`}>
        <h1>Create a new Game</h1>
      </div>

      <div className={`${containerClasses} h-2/6`}>
        <h1>Waiting for Players...</h1>
        <div className='grid grid-cols-4 w-full p-4 gap-8'>
          <Player />
          <Player />
          <Player />
        </div>
      </div>
    </div>
  );
}

function Player() {
  return (
    <div className='bg-blue-500 rounded-md shadow-xl p-2 flex flex-col justify-between items-center h-full'>
      <ProfilePicture url='' />
      <h1>Player</h1>
    </div>
  );
}
