import { useEffect, useRef, useState } from 'react';

import SocketService from '../../../../services/socket.service';

import useCurrentUser from '../../../../hooks/useCurrentUser';

import { Message } from '../../../../types/Message';

import OwnMessage from './Messages/OwnMessage';
import FriendMessage from './Messages/FriendMessage';

interface ChatProps {
  chatId: string;
}

export default function Chat({ chatId, ...props }: ChatProps) {
  const div = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [refresh, triggerRefresh] = useState<number>(Date.now());

  const { username } = useCurrentUser();

  useEffect(() => {
    SocketService.boundTriggerToEvent('newMessage', triggerRefresh);
  }, []);

  useEffect(() => {
    SocketService.getChatMessages(chatId, setMessages);
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
