import ChatSearchBar from './components/ChatSearchBar';
import ChatSelectors from './components/ChatSelectors';
import NavBar from './components/NavBar';

export default function MessageAside() {
  return (
    <div className='bg-window col-span-2 rounded-r-2xl flex overflow-y-scroll'>
      <NavBar />
      <div className='overflow-y-scroll w-full'>
        <ChatSearchBar />
        <ChatSelectors />
      </div>
    </div>
  );
}
