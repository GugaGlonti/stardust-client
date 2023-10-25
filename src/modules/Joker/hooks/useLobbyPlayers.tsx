import { useEffect, useState } from 'react';
import JokerService from '../../../services/joker.service';
import SocketService from '../../../services/socket.service';

export default function useLobbyPlayers(createJoker: string) {
  const [refresh, triggerRefresh] = useState(0);
  const [players, setPlayers] = useState<string[]>([]);

  SocketService.boundTriggerToEvent('lobby-update', triggerRefresh);

  useEffect(() => {
    (async () => setPlayers(await JokerService.getLobbyFriends(createJoker)))();
  }, [createJoker, refresh]);

  return players;
}
