import card, { CardIDs } from '../../../assets/cards/__card.dictionary';
import JokerService from '../../../services/joker.service';

interface CardProps {
  id?: CardIDs;
  onClick?: () => void;
  rotated?: boolean;
}

export default function Card({ id = '__', onClick, rotated = false }: CardProps) {
  const flipped = id === '__';

  if (!id && !flipped) return <h1 className='text-red-500 bg-gray-200'>INVALID CARD</h1>;

  let cardName = JokerService.getCardName(id as string);

  return (
    <img
      // @ts-ignore
      src={card[id]}
      alt={cardName}
      className={`
        max-w-full
        max-w-32 max-h-44
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
            hover:z-10`
        }
        ${
          !!rotated &&
          `transform
          rotate-90`
        }

      `}
    />
  );
}
