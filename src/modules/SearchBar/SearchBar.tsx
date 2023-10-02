import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import UserService from '../../services/user.service';
import { UserSearchResults } from './UserSearchResults';

export default function SearchBar() {
  const [search, setSearch] = useState<string>('');
  const [users, setUsers] = useState<any[]>([]);
  const [focused, setFocused] = useState<boolean>(true);

  useEffect(() => {
    (async function searchUsers() {
      if (!search) return setUsers([]);
      const users = await UserService.searchUsers(search);
      setUsers(users);
    })();
  }, [search]);

  async function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const query = e.target.value;
    setSearch(query);
  }

  function enterFocus() {
    setFocused(true);
  }

  function exitFocus() {
    setFocused(false);
  }

  function clearSearch() {
    setSearch('');
    setUsers([]);
  }

  return (
    <div
      onFocus={enterFocus}
      onBlur={exitFocus}>
      <div className='bg-white flex items-center rounded-full'>
        <FaSearch className='ml-4' />
        <input
          onChange={changeHandler}
          value={search}
          placeholder='search any user...'
          className='border-0 w-full bg-transparent focus:border-0 focus:ring-0'
        />
      </div>

      <div className='h-2' />

      {!!focused && (
        <>
          {!!users.length && (
            <UserSearchResults
              users={users}
              onClearSearch={clearSearch}
            />
          )}

          {!users.length && search && (
            <div className='absolute bg-white rounded-3xl shadow-2xl'>
              <div className='flex items-center gap-2 p-2 m-2 rounded-full'>
                <h1 className='text-lg'>User Not Found</h1>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
