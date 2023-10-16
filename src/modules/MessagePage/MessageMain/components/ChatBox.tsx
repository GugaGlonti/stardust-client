import { FaPaperPlane, FaPlus } from 'react-icons/fa';
import { useContext, useState } from 'react';
import ChatService from '../../../../services/chat.service';
import { authContext } from '../../../../store/auth.provider';

interface ChatBoxProps {
  chatId: string;
}

export default function ChatBox({ chatId, ...props }: ChatBoxProps) {
  const context = useContext(authContext);
  const { username: sender } = context.loggedInUser || {};

  const [message, setMessage] = useState('');

  function sendHandler(e: any) {
    e.preventDefault();
    ChatService.sendMessage(chatId, message, sender as string);
    setMessage('');
  }

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value);
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
        onChange={changeHandler}
      />
      <FaPaperPlane onClick={sendHandler} />
    </form>
  );
}
