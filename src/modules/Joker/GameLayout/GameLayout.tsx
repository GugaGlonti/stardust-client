import { useState } from 'react';
import TheirCards from '../TheirCards/TheirCards';
import YourCards from '../YourCards/YourCards';
import ProfilePicture from '../../../components/ProfilePicture';
import Table from './Table';

export default function GameLayout() {
  const [cardcount, setCardcount] = useState<number>(9);

  const outerImageClasses = `flex justify-center items-center`;
  const imageClasses = `bg-window h-3/4 aspect-square rounded-full overflow-hidden border-4 border-gold-dark absolute`;

  return (
    <div className='grid grid-cols-12 grid-rows-6 h-full w-full overflow-hidden'>
      {/** ========== // ========= TODO: REMOVE ========== // ========== */}
      <input
        type='number'
        onChange={e => setCardcount(e.target.value as any)}
        className='bg-red-500'
        placeholder='cardcount'
        defaultValue={cardcount}
      />

      {/** ========== // ========== @Top Player ========== // ========== */}
      <div className={`${outerImageClasses} flex justify-center items-center col-start-6 col-span-2 row-start-1 z-30 relative`}>
        <div className={`${imageClasses}`}>
          <ProfilePicture url='' />
        </div>
      </div>
      <TheirCards
        className={`col-start-6 col-span-1 row-start-1 -translate-y-32`}
        count={cardcount}
      />

      {/** ========== // ========== @Left Player ========== // ========== */}
      <div className={`${outerImageClasses} items-center col-start-1 row-start-3 z-30 relative`}>
        <div className={`${imageClasses}`}>
          <ProfilePicture url='' />
        </div>
      </div>
      <TheirCards
        className={`col-start-1 row-start-3 -translate-x-16 -translate-y-20`}
        count={cardcount}
        rotatedRight
      />

      {/** ========== // ========== @Right Player ========== // ========== */}
      <div className={`${outerImageClasses}  items-center col-start-12 row-start-3 z-30 relative`}>
        <div className={`${imageClasses}`}>
          <ProfilePicture url='' />
        </div>
      </div>
      <TheirCards
        className={`col-start-12 row-start-3 translate-x-16 translate-y-20`}
        count={cardcount}
        rotatedLeft
      />

      {/** ========== // =========== // @Table // =========== // ========== */}
      <Table
        cards={['_1', 'd7', '__', 'c12']}
        className='bg-window col-start-3 col-span-8 row-start-2 row-span-3'
      />

      {/** ========== // ========== / @YourCards / ========== // ========== */}
      <div className='bg-window row-start-6 col-span-full' />
      <YourCards
        className={`col-start-6 col-span-2 row-start-6 z-10`}
        cardIds={['_0', 'c12', 'c3', 'd7']}
      />
    </div>
  );
}
