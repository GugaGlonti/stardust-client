import { FaSearch } from 'react-icons/fa';

export default function ChatSearchBar({ ...props }) {
  return (
    <div
      {...props}
      className='bg-window-dark p-4 rounded-tr-2xl flex items-center'>
      <FaSearch />

      <input
        className='w-full h-full bg-transparent border-0 focus:border-0 focus:ring-0'
        placeholder='search your conversations'
      />
    </div>
  );
}
