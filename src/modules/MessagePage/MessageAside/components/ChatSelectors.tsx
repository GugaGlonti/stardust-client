import { ChatIdentifier } from '../../../../types/interfaces';
import ChatSelector from './ChatSelector';

interface ChatSelectorProps {
  chatIdentifiers: ChatIdentifier[];
}

export default function ChatSelectors({ chatIdentifiers, ...props }: ChatSelectorProps) {
  return (
    <div
      className='flex flex-col w-full'
      {...props}>
      {chatIdentifiers.map(ChatIdentifier => (
        <ChatSelector
          key={ChatIdentifier.id}
          id={ChatIdentifier.id}
          friend={ChatIdentifier.friend}
        />
      ))}
    </div>
  );
}
