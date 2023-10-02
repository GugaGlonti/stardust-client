import { SearchUsersData } from '../../services/user.service';
import { UserSearchResult } from './UserSearchResult';

interface UserSearchResultsProps {
  users: SearchUsersData[];
  onClearSearch: () => void;
}

//prettier-ignore
export const UserSearchResults = ({ users, onClearSearch }: UserSearchResultsProps) => (
  <div className='absolute bg-white rounded-3xl shadow-2xl'>
    {users.map((user, i) => <UserSearchResult {...user} key={i} onClearSearch={onClearSearch} /> )}
  </div>
);
