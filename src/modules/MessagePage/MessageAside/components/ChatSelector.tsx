import ProfilePicture from '../../../../assets/svg/ProfilePicture';

interface ChatSelectorProps {}
export default function ChatSelector({ ...props }: ChatSelectorProps) {
  return (
    <div
      className='flex gap-2 p-8 bg-gray-700 hover:bg-gray-600 cursor-pointer'
      {...props}>
      <ProfilePicture className='h-12' />
      <div className='flex flex-col'>
        <h1 className='text-lg'>@username</h1>
        <h1 className='text-xs'>Last message</h1>
      </div>
    </div>
  );
}
