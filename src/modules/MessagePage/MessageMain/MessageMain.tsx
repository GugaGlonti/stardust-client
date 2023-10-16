import { useLoaderData } from 'react-router';
import Header from './components/Header';
import ChatBox from './components/ChatBox';
import Chat from './components/Chat';

export default function MessageMain() {
  const [chatId, username] = useLoaderData() as [string, string];

  return (
    <div
      className='bg-window col-start-4 col-span-4 rounded-2xl
    flex flex-col items-center justify-between'>
      <Header username={username} />
      <Chat chatId={chatId} />
      <ChatBox chatId={chatId} />
    </div>
  );
}
