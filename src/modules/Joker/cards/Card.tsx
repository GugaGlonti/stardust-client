import { useState } from 'react';
import card, { CardIDs } from '../../../assets/cards/__card.dictionary';
import JokerService from '../../../services/joker.service';

interface CardProps {
  id?: CardIDs;
  onClick?: () => void;
  rotatedLeft?: boolean;
  rotatedRight?: boolean;
  className?: string;
  style?: any;
}

export default function Card({ id = '__', onClick, rotatedLeft = false, rotatedRight = false, className, style, ...props }: CardProps) {
  const [clicked, setClicked] = useState(false);

  const flipped = id === '__';

  if (!id && !flipped) return <h1 className='text-red-500 bg-gray-200'>INVALID CARD</h1>;

  let cardName = JokerService.getCardName(id as string);

  function clickHandler() {
    if (!onClick) return;
    setTimeout(() => onClick(), 200);
    setClicked(true);
  }

  return (
    <img
      // @ts-ignore
      src={card[id]}
      alt={cardName}
      style={style}
      onClick={clickHandler}
      className={`${className}
        p-1
        rounded-xl
        shadow-2xl
        border-black
        bg-white
        border-4
        ${
          !!onClick &&
          `hover:border-secondary-dark
          cursor-pointer
          transition-all
          duration-200
          ease-in-out
            hover:-translate-y-10
            hover:scale-125 
            hover:mx-4
            hover:shadow-2xl
            hover:z-50`
        }
        duration-2000
        ${
          !!clicked &&
          `transform -translate-y-40vh
          hover:-translate-y-40vh
          hover:shadow-none
          scale-125`
        }
        ${
          !!rotatedLeft &&
          `transform
          rotate-90`
        }
        ${
          !!rotatedRight &&
          `transform
          -rotate-90`
        }`}
      {...props}
    />
  );
}
