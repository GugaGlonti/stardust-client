import ProfilePicture from '../../../../assets/svg/ProfilePicture';
import { NavLink } from 'react-router-dom';

interface ChatSelectorProps {
  id: string;
  friend: string;
}

export default function ChatSelector({ id, friend, ...props }: ChatSelectorProps) {
  return (
    <NavLink
      to={`/messages/${id}-${friend}`}
      className={({ isActive }) => (isActive ? 'flex gap-2 p-8 bg-gray-600 hover:bg-gray-600 cursor-pointer' : 'flex gap-2 p-8 bg-gray-700 hover:bg-gray-600 cursor-pointer')}
      {...props}>
      <ProfilePicture className='h-12' />
      <div className='flex flex-col'>
        <h1 className='text-lg'>@{friend}</h1>
        <h1 className='text-xs'>Last message</h1>
      </div>
    </NavLink>
  );
}
