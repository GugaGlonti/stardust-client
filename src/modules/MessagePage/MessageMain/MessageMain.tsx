import { useLoaderData } from 'react-router';

export default function MessageMain() {
  const chatId = useLoaderData() as string;

  return <div className='bg-window col-start-4 col-span-4 rounded-2xl'>{chatId}</div>;
}
