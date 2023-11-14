import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';

export default function JokerNav() {
  const nav = useJokerNav();

  return (
    <nav
      className='flex border-b bg-secondary-dark border-gray-200 h-12 text-gold-light'
      aria-label='Breadcrumb'>
      <ol className='flex m-auto w-full'>
        {nav.map((path, i, a) => (
          <li
            key={path}
            className={`flex items-center ml-8 gap-8`}>
            <h1 className={`${i === a.length - 1 && 'SOME ACTIVE CLASS'}`}>{path}</h1>
            <Arrow />
          </li>
        ))}
      </ol>
    </nav>
  );
}

function useJokerNav() {
  const [nav, setNav] = useState<string[]>([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const NAV = ['Create', 'Lobby', 'InGame'];
    const navBuilder = [];
    for (let i = 0; i < pathname.split('/').length - 1; i++) navBuilder.push(NAV[i]);
    setNav(navBuilder);
  }, [pathname]);
  return nav;
}

function Arrow() {
  return (
    <svg
      className='h-full w-6 flex-shrink-0 text-gray-200'
      viewBox='0 0 24 44'
      preserveAspectRatio='none'
      fill='currentColor'
      aria-hidden='true'>
      <path d='M.293 0l22 22-22 22h1.414l22-22-22-22H.293z' />
    </svg>
  );
}
