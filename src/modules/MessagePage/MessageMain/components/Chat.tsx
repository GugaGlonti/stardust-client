import { useEffect, useRef, useState } from 'react';
import ChatService from '../../../../services/chat.service';
import { Message } from '../../../../types/interfaces';
import OwnMessage from './Messages/OwnMessage';
import FriendMessage from './Messages/FriendMessage';
import useCurrentUser from '../../../../hooks/useCurrentUser';

interface ChatProps {
  chatId: string;
}

export default function Chat({ chatId, ...props }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [refresh, triggerRefresh] = useState<number>(Date.now());

  const div = useRef<HTMLDivElement>(null);

  const { username } = useCurrentUser();
  ChatService.connect(triggerRefresh);

  useEffect(() => {
    ChatService.getChatMessages(chatId, setMessages);
    return () => setMessages([]);
  }, [chatId, refresh]);

  useEffect(() => {
    if (!div.current) return;
    div.current.scrollTop = div.current.scrollHeight;
  }, [messages]);

  return (
    <div
      ref={div}
      className='w-full h-70vh overflow-scroll pt-16 pb-8 px-8 flex flex-col gap-4'
      {...props}>
      {messages.map((message: Message) => (
        <div key={message.id}>{message.sender === username ? <OwnMessage message={message} /> : <FriendMessage message={message} />}</div>
      ))}
    </div>
  );
}
