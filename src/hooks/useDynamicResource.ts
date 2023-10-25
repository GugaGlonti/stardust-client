import { useEffect, useState } from 'react';
import SocketService from '../services/socket.service';

export default async function useDynamicResource<T>(event: string, functionToGetResource: () => Promise<T>) {
  const [resource, setResource] = useState<T>(null as T);

  const [refresh, triggerRefresh] = useState(0);
  SocketService.boundTriggerToEvent(event, triggerRefresh);

  useEffect(() => {
    (async () => setResource(await functionToGetResource()))();
  }, [refresh, functionToGetResource]);

  return resource;
}
