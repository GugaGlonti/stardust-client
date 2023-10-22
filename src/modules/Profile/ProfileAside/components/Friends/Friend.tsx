import { NavLink } from 'react-router-dom';
import { User } from '../../../../../types/interfaces';
import ProfilePicture from '../../../../../components/ProfilePicture';

interface FriendProps {
  friend: User;
}

export default function Friend({ friend, ...props }: FriendProps) {
  const url = friend.profilePicture;

  return (
    <NavLink
      to={`/${friend.username}`}
      {...props}>
      <div className='border-white border-2'>
        <ProfilePicture url={url} />
      </div>
      <h1 className='text-xs mb-8 ml-2'>@{friend.username}</h1>
    </NavLink>
  );
}
