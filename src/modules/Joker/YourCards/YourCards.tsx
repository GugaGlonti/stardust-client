import Card from '../cards/Card';
import { CardID } from '../../../assets/cards/__card.dictionary';
import JokerService from '../../../services/joker.service';
import useCurrentUser from '../../../hooks/useCurrentUser';

interface YourCardsProps {
  cardIds: CardID[];
  className?: string;
}

export default function YourCards({ cardIds, className, ...props }: YourCardsProps) {
  const { username } = useCurrentUser();

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
            onClick={() => JokerService.playCard(cardId, username)}
          />
        ))}
      </div>
    </>
  );
}
