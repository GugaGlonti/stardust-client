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
  const flipped = id === '__';

  if (!id && !flipped) return <h1 className='text-red-500 bg-gray-200'>INVALID CARD</h1>;

  let cardName = JokerService.getCardName(id as string);

  return (
    <img
      // @ts-ignore
      src={card[id]}
      alt={cardName}
      style={style}
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
            hover:shadow-2xl
            hover:z-50`
        }
        ${!!rotatedLeft && `transform rotate-90`}
        ${!!rotatedRight && `transform -rotate-90`}`}
      {...props}
    />
  );
}
