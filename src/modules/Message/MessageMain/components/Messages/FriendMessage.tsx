import { Message } from '../../../../../types/interfaces';

interface MessageProps {
  message: Message;
}

export default function FriendMessage({ message, ...props }: MessageProps) {
  const timestamp = message.timestamp.toString().split('T')[1].split('.')[0].split(':').slice(0, 2).join(':');

  return (
    <div
      className='flex justify-start items-baseline'
      {...props}>
      <div className='bg-primary ml-8 mb-8 px-4 py-2 rounded-t-2xl rounded-br-2xl'>
        <p className='text-white text-xl'>{message.text}</p>
      </div>
      <p className='text-xs ml-2'>{timestamp}</p>
    </div>
  );
}
