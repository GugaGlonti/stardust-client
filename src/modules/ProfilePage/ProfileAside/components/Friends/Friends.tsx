import { User } from '../../../../../types/interfaces';

interface FriendsProps {
  friends: User[];
}

export default function Friends({ friends, ...props }: FriendsProps) {
  return (
    <div
      className='grid grid-cols-3'
      {...props}>
      <h1 className='bg-red-500'>test</h1>
      <h1 className='bg-red-500'>test</h1>
      <h1 className='bg-red-500'>test</h1>
      <h1 className='bg-red-500'>test</h1>
      <h1 className='bg-red-500'>test</h1>
    </div>
  );
}
