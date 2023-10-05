import { SearchUsersData } from '../../types/interfaces';
import { UserSearchResult } from './UserSearchResult';

interface UserSearchResultsProps {
  users: SearchUsersData[];
  onClearSearch: () => void;
}

export default function UserSearchResults({ users, onClearSearch }: UserSearchResultsProps) {
  return (
    <div className='absolute bg-white rounded-3xl shadow-2xl'>
      {users.map((user, i) => (
        <UserSearchResult
          {...user}
          key={i}
          onClearSearch={onClearSearch}
        />
      ))}
    </div>
  );
}
