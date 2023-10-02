import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import UserService from '../services/user.service';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    (async function searchUsers() {
      if (!search) return setUsers([]);
      setUsers(await UserService.searchUsers(search));
    })();
  }, [search]);

  async function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const query = e.target.value;
    setSearch(query);
  }
  return (
    <>
      <div className='bg-white flex items-center rounded-full'>
        <FaSearch className='ml-4' />
        <input
          onChange={changeHandler}
          value={search}
          placeholder='search any user...'
          className='border-0 w-full bg-transparent focus:border-0 focus:ring-0'
        />
      </div>

      {!!users.length && (
        <div className='absolute bg-white rounded-md shadow-md'>
          {users.map(user => (
            <div key={user._id}>
              <p>{user.username}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
