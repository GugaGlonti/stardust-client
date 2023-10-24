import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function JokerNav() {
  const pages = [
    {
      name: 'Create a Game',
      path: '/joker/create',
    },
    {
      name: 'Play',
      path: '/joker/play',
    },
  ];

  return (
    <nav
      className='flex border-b border-gray-200 bg-white'
      aria-label='Breadcrumb'>
      <ol className='mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8'>
        <li className='flex'>
          <div className='flex items-center'>
            <NavLink
              to='/joker'
              className='text-gray-400 hover:text-gray-500'>
              <FaHome />
              <span className='sr-only'>Home</span>
            </NavLink>
          </div>
        </li>
        {pages.map(page => (
          <li
            key={page.name}
            className='flex'>
            <div className='flex items-center'>
              <svg
                className='h-full w-6 flex-shrink-0 text-gray-200'
                viewBox='0 0 24 44'
                preserveAspectRatio='none'
                fill='currentColor'
                aria-hidden='true'>
                <path d='M.293 0l22 22-22 22h1.414l22-22-22-22H.293z' />
              </svg>
              <NavLink
                to={page.path}
                className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
                aria-current={page ? 'page' : undefined}>
                {page.name}
              </NavLink>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
