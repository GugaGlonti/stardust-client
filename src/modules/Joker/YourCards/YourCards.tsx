import Card from '../cards/Card';
import { CardIDs } from '../../../assets/cards/__card.dictionary';

interface YourCardsProps {
  cardIds: CardIDs[];
}

export default function YourCards({ cardIds }: YourCardsProps) {
  return (
    <>
      <div className='h-32' />
      <div
        className={`
          flex
          justify-center
          w-full
          bg-window
          rounded-md
          shadow-xl
          p-2
          flex-wrap
        `}>
        {cardIds.map(cardId => (
          <Card id={cardId} />
        ))}
      </div>
    </>
  );
}
