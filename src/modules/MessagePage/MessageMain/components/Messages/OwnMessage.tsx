import { Message } from '../../../../../types/interfaces';

interface MessageProps {
  message: Message;
}

export default function OwnMessage({ message, ...props }: MessageProps) {
  const timestamp = message.timestamp.toString().split('T')[1].split('.')[0].split(':').slice(0, 2).join(':');

  return (
    <>
      <div
        className='flex justify-end items-baseline'
        {...props}>
        <p className='text-xs mr-2'>{timestamp}</p>
        <div className='bg-secondary mr-8 mb-8 px-4 py-2 rounded-t-2xl rounded-bl-2xl'>
          <p className='text-white text-xl'>{message.text}</p>
        </div>
      </div>
    </>
  );
}
