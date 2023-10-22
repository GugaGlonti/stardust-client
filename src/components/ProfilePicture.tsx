import pp from '../assets/ProfilePicture.png';

interface ProfilePictureProps {
  url: string;
  className?: string;
}
export default function ProfilePicture({ url, className }: ProfilePictureProps) {
  if (!url || url === '') {
    url = pp;
  }

  return (
    <>
      <img
        className={`h-full w-full rounded ${className}`}
        src={url}
        alt=''
      />
    </>
  );
}
