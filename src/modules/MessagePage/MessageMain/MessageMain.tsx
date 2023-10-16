import { useLoaderData } from 'react-router';

export default function MessageMain() {
  const [id, username] = useLoaderData() as [string, string];

  return (
    <div className='bg-window col-start-4 col-span-4 rounded-2xl'>
      {id} {username}
    </div>
  );
}
