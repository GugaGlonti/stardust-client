export default function Media() {
  return (
    <div className='grid grid-cols-3 gap-4 mb-8'>
      <MediaItem />
      <MediaItem />
      <MediaItem />
      <MediaItem />
      <MediaItem />
      <MediaItem />
      <MediaItem />
      <MediaItem />
      <MediaItem />
      <MediaItem />
    </div>
  );
}

function MediaItem() {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-full aspect-square bg-gray-500 rounded-2xl'></div>
      <h1 className='mt-4'>Media Item</h1>
    </div>
  );
}
