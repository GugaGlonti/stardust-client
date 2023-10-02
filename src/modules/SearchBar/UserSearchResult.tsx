import { useNavigate } from 'react-router';
import { SearchUsersData } from '../../services/user.service';

interface UserSearchResultProps extends SearchUsersData {
  key: number;
  onClearSearch: () => void;
}

export const UserSearchResult = ({ firstName, lastName, username, email, onClearSearch, ...props }: UserSearchResultProps) => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate(`/${username}`);
    onClearSearch();
  }

  return (
    <div {...props}>
      <div
        className='flex items-center gap-2 py-2 pl-2 pr-8 m-2 rounded-full hover:shadow-2xl hover:bg-secondary-dark'
        onMouseDown={clickHandler}>
        <div className='flex items-center justify-center w-12 h-12 bg-gray-400 rounded-full'>
          <h1 className='text-white'>{firstName[0]}</h1>
        </div>
        <div>
          <h1 className='text-lg'>
            {firstName} {lastName}
          </h1>
          <h1 className='text-sm text-gray-400'>@{username}</h1>
        </div>
      </div>
    </div>
  );
};
