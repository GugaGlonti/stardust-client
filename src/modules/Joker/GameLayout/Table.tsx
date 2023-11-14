import { CardID } from '../../../assets/cards/__card.dictionary';
import Card from '../cards/Card';

interface TableProps {
  className?: string;
  trump: CardID;
  cards: CardID[];
}

// Trump, P0, P1, P2, P3

export default function Table({ className, trump, cards = [], ...props }: TableProps) {
  if (cards.length > 4) return <h1>Invalid Card Amount</h1>;

  return (
    <div
      className={`${className} bg-window rounded-2xl flex justify-center items-center p-2 shadow-xl py-16 gap-8 relative`}
      {...props}>
      {/** ========== // ============ @Trump Card ============ // ========== */}
      <Card
        id={'__'}
        className='h-1/3 absolute left-0 translate-x-6 -translate-y-4'
      />
      <Card
        id={'__'}
        className='h-1/3 absolute left-0 translate-x-8 -translate-y-2'
      />
      <Card
        id={trump}
        className='h-1/3 absolute left-0 translate-x-10'
      />
      {/** ========== // ========== @Player Cards ========== // ========== */}
      <Card
        style={{ display: !!cards[0] ? 'block' : 'none' }}
        id={cards[0]}
        className='h-1/2 self-start'
      />
      <Card
        id={cards[1]}
        style={{ display: !!cards[1] ? 'block' : 'none' }}
        className='h-1/2 self-end'
      />
      <Card
        id={cards[2]}
        style={{ display: !!cards[2] ? 'block' : 'none' }}
        className='h-1/2 self-start'
      />
      <Card
        id={cards[3]}
        style={{ display: !!cards[3] ? 'block' : 'none' }}
        className='h-1/2 self-end'
      />
    </div>
  );
}
