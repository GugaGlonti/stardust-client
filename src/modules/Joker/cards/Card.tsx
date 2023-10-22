import card, { CardNames } from '../../../assets/cards/__card.dictionary';
import { JokerService } from '../../../services/joker.service';

interface CardProps {
  id?: CardNames;
  flipped?: boolean;
  isClickable?: boolean;
  onClick?: () => void;
}

export default function Card({ id, flipped = false, isClickable = true, onClick }: CardProps) {
  if (!id && !flipped) {
    return <h1 className='text-red-500 bg-gray-200'>INVALID CARD</h1>;
  }

  if (flipped) {
    return (
      <>
        <div>
          <img
            src={card['__']}
            alt='flipped card'
            className={`w-32 h-44 rounded-md ${isClickable ? 'cursor-pointer' : ''}`}
          />
        </div>
      </>
    );
  }

  const cardName = JokerService.getCardName(id as string);

  return (
    <>
      <div>
        <img
          // @ts-ignore
          src={card[id]}
          alt={cardName}
          className={`w-32 h-44 rounded-md ${isClickable ? 'cursor-pointer' : ''}`}
        />
      </div>
      <h1>{cardName}</h1>
    </>
  );
}
