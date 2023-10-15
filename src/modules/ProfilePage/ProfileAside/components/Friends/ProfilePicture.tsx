interface ProfilePictureProps {
  url: string;
  className?: string;
}
export default function ProfilePicture({ url, className }: ProfilePictureProps) {
  let content;

  url = 'https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/287074220_1690919324618955_8712847773094818949_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gGDnBrAXs4oAX_uTzfw&_nc_ht=scontent-dus1-1.xx&oh=00_AfAnigtGo4EuVAD3-x3ZtgKeZJOGtF0oZdIsqPERAyv_4w&oe=652F4674';

  if (url)
    content = (
      <img
        className={`rounded-2xl ${className}`}
        src={url}
        alt='profile'
      />
    );
  else content = <div className='text-2xl text-gray-500'>?</div>;
  return <div className={`aspect-square flex items-center justify-center bg-window shadow-xl border border-secondary rounded-2xl mx-2 ${className}`}>{content}</div>;
}
