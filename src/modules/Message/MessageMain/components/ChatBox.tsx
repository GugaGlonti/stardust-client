import { FaPaperPlane, FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import ChatService from '../../../../services/chat.service';
import useCurrentUser from '../../../../hooks/useCurrentUser';

interface ChatBoxProps {
  chatId: string;
}

export default function ChatBox({ chatId, ...props }: ChatBoxProps) {
  const { username: sender } = useCurrentUser();
  const [message, setMessage] = useState('');

  function sendHandler(e: any) {
    e.preventDefault();
    ChatService.sendMessage(chatId, message, sender as string);
    setMessage('');
  }

  return (
    <form
      className='bg-window-dark w-full rounded-b-2xl flex justify-between px-16 h-16 items-center'
      {...props}
      onSubmit={sendHandler}>
      <FaPlus />
      <input
        className='grow w-full mx-4 bg-transparent border-0 focus:border-0 focus:ring-0'
        placeholder='type a message'
        {...props}
        value={message}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
      />
      <FaPaperPlane onClick={sendHandler} />
    </form>
  );
}
