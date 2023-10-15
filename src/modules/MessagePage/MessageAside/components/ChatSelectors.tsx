import ChatSelector from './ChatSelector';

interface ChatSelectorProps {}

export default function ChatSelectors({ ...props }: ChatSelectorProps) {
  return (
    <div
      className='flex flex-col w-full'
      {...props}>
      <ChatSelector />
      <ChatSelector />
      <ChatSelector />
      <ChatSelector />
      <ChatSelector />
      <ChatSelector />
      <ChatSelector />
      <ChatSelector />
      <ChatSelector />
      <ChatSelector />
      <ChatSelector />
      <ChatSelector />
    </div>
  );
}
