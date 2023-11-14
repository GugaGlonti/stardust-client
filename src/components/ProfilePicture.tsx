import pp from '../assets/ProfilePicture.png';

interface ProfilePictureProps {
  url?: string;
  className?: string;
  username?: string;
}
export default function ProfilePicture({ url, className, username }: ProfilePictureProps) {
  if (!url || url === '') {
    url = pp;
  }

  return (
    <div className='relative'>
      <img
        className={`h-full w-full rounded ${className}`}
        src={url}
        alt=''
      />
      {!!username && <h1 className='text-lg pt-1 w-full h-1/4 bottom-0 bg-secondary-dark absolute left-1/2 -translate-x-1/2 text-center'>{username}</h1>}
    </div>
  );
}
