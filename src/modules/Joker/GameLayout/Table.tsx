import { CardIDs } from '../../../assets/cards/__card.dictionary';
import Card from '../cards/Card';

interface TableProps {
  className?: string;
  cards: CardIDs[];
}

// Trump, P1, P2, P3, P4

export default function Table({ className, cards, ...props }: TableProps) {
  if (cards.length > 5 || cards.length < 1) return <h1>Invalid Card Amount</h1>;

  return (
    <div
      className={`${className} bg-window rounded-2xl flex justify-center items-center p-2 shadow-xl py-16 gap-8 relative`}
      {...props}>
      {/** ========== // ============ @Trump Card ============ // ========== */}
      <Card
        id={'__'}
        className='h-1/2 absolute left-0 translate-x-6 -translate-y-4'
      />
      <Card
        id={'__'}
        className='h-1/2 absolute left-0 translate-x-8 -translate-y-2'
      />
      <Card
        id={cards[0]}
        className='h-1/2 absolute left-0 translate-x-10'
      />
      {/** ========== // ========== @Player Cards ========== // ========== */}
      <Card
        id={cards[1]}
        className='h-1/2 self-start'
      />
      <Card
        id={cards[2]}
        className='h-1/2 self-end'
      />
      <Card
        id={cards[3]}
        className='h-1/2 self-start'
      />
      <Card
        id={cards[5]}
        className='h-1/2 self-end'
      />
    </div>
  );
}
