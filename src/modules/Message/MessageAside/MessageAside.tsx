import { useEffect, useState } from 'react';

import NavBar from './components/NavBar';

import ChatService from '../../../services/chat.service';

import ChatSearchBar from './components/ChatSearchBar';
import ChatSelectors from './components/ChatSelectors';
import { ChatIdentifier } from '../../../types/ChatIdentifier';

import useCurrentUser from '../../../hooks/useCurrentUser';
import SocketService from '../../../services/socket.service';

export default function MessageAside() {
  const { friends, username } = useCurrentUser();

  const [chatIdentifiers, setChatIdentifiers] = useState<ChatIdentifier[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [refresh, triggerRefresh] = useState<number>(Date.now());

  useEffect(() => {
    SocketService.boundTriggerToEvent('newMessage', triggerRefresh);
  }, []);

  useEffect(() => {
    (async () => {
      setChatIdentifiers(await ChatService.getChatIdentifiers(friends as string[], username as string));

      setLoading(false);
    })();
  }, [friends, username, refresh]);

  if (loading) return <h1 className='p-8'>loading...</h1>;
  if (!friends) return <div>you dont have any friends lmao</div>;

  return (
    <div className='bg-window col-span-2 rounded-r-2xl flex overflow-y-scroll'>
      <NavBar />
      <div className='overflow-y-scroll w-full'>
        <ChatSearchBar />
        <ChatSelectors chatIdentifiers={chatIdentifiers} />
      </div>
    </div>
  );
}
