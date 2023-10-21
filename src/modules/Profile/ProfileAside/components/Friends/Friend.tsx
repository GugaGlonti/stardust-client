import { NavLink } from 'react-router-dom';
import { User } from '../../../../../types/interfaces';
import ProfilePicture from './ProfilePicture';

interface FriendProps {
  friend: User;
}

export default function Friend({ friend, ...props }: FriendProps) {
  const url = friend.profilePicture;

  return (
    <NavLink
      to={`/${friend.username}`}
      {...props}>
      <ProfilePicture url={url} />
      <h1 className='text-xs mb-8 ml-2'>@{friend.username}</h1>
    </NavLink>
  );
}
