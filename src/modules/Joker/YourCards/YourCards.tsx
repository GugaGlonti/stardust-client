import Card from '../cards/Card';
import { CardID } from '../../../assets/cards/__card.dictionary';

interface YourCardsProps {
  cardIds: CardID[];
  className?: string;
}

export default function YourCards({ cardIds, className, ...props }: YourCardsProps) {
  return (
    <>
      <div
        className={`${className}
          flex
          justify-center
          w-fit-content
          bg-window
          rounded-md
          shadow-xl
          p-2
          flex-shrink
        `}
        {...props}>
        {cardIds.map(cardId => (
          <Card
            key={cardId}
            id={cardId}
            onClick={() => {}}
          />
        ))}
      </div>
    </>
  );
}
