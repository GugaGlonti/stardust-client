import { useContext, useEffect, useState } from 'react';

import NavBar from './components/NavBar';

import ChatService from '../../../services/chat.service';

import { authContext } from '../../../store/auth.provider';

import ChatSearchBar from './components/ChatSearchBar';
import ChatSelectors from './components/ChatSelectors';
import { ChatIdentifier } from '../../../types/interfaces';

export default function MessageAside() {
  const context = useContext(authContext);
  const { friends, username } = context.loggedInUser || {};

  const [chatIdentifiers, setChatIdentifiers] = useState<ChatIdentifier[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setChatIdentifiers(await ChatService.getChatIdentifiers(friends as string[], username as string));
      setLoading(false);
    })();
  }, [friends, username]);

  if (loading) return <h1 className='p-8'>loading...</h1>;
  if (!chatIdentifiers.length) return <h1 className='p-8'>chats could not be fetched</h1>;
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
