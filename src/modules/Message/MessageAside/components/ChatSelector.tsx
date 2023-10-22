import { NavLink } from 'react-router-dom';
import { Message } from '../../../../types/interfaces';
import ProfilePicture from '../../../../components/ProfilePicture';

interface ChatSelectorProps {
  id: string;
  friend: string;
  lastMessage: Message;
}

export default function ChatSelector({ id, friend, lastMessage, ...props }: ChatSelectorProps) {
  const lastText = lastMessage?.text;
  const lastTimestamp = lastMessage?.timestamp.toString().split('T')[1].split('.')[0].split(':').slice(0, 2).join(':');

  const baseClasses = 'py-8';
  const activeclasses = baseClasses + ' bg-secondary-dark border-l-4 border-green-50';
  const inactiveClasses = baseClasses + ' hover:bg-secondary-light';

  return (
    <>
      <NavLink
        to={`/messages/${id}-${friend}`}
        className={({ isActive }) => (isActive ? activeclasses : inactiveClasses)}
        {...props}>
        <div className='flex h-5vh'>
          <div className='w-5vh h-5vh mx-4'>
            <ProfilePicture url='' />
          </div>
          <div className='flex flex-col h-full overflow-hidden w-full'>
            <h1 className='text-lg'>@{friend}</h1>
            <div className='flex justify-between items-start w-full'>
              <h1 className='text-xs text-white'>{!!lastText ? lastText : ''}</h1>
              <h1 className='text-xs text-gray-400 mr-5'>{!!lastTimestamp ? lastTimestamp : ''}</h1>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
}
