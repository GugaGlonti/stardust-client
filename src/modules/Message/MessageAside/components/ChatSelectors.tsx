import { ChatIdentifier } from '../../../../types/ChatIdentifier';
import ChatSelector from './ChatSelector';

interface ChatSelectorProps {
  chatIdentifiers: ChatIdentifier[];
}

export default function ChatSelectors({ chatIdentifiers, ...props }: ChatSelectorProps) {
  chatIdentifiers.sort((a, b) => {
    const aDate = new Date(a.lastMessage?.timestamp || 0);
    const bDate = new Date(b.lastMessage?.timestamp || 0);
    return bDate.getTime() - aDate.getTime();
  });

  return (
    <div
      className='flex flex-col w-full'
      {...props}>
      {chatIdentifiers.map(chatIdentifier => (
        <ChatSelector
          key={chatIdentifier.id}
          id={chatIdentifier.id}
          friend={chatIdentifier.friend}
          lastMessage={chatIdentifier.lastMessage}
        />
      ))}
    </div>
  );
}
