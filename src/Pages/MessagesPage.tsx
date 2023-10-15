import MessageAside from '../modules/MessagePage/MessageAside/MessageAside';
import MessageMain from '../modules/MessagePage/MessageMain/MessageMain';
import MessageProfile from '../modules/MessagePage/MessageProfile/MessageProfile';

export default function MessagesPage() {
  return (
    <div className='h-80vh mt-16 grid grid-cols-10'>
      <MessageAside />
      <MessageMain />
      <MessageProfile />
    </div>
  );
}
