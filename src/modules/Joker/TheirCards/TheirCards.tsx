import Card from '../cards/Card';

interface TheirCardsProps {
  className?: string;
  count: number;
  rotatedLeft?: boolean;
  rotatedRight?: boolean;
}

export default function TheirCards({ count, className, rotatedLeft = false, rotatedRight = false }: TheirCardsProps) {
  return (
    <>
      <div
        className={`${className}
      relative
      ${!!rotatedLeft && 'transform -rotate-90'}
      ${!!rotatedRight && 'transform rotate-90'}
      `}>
        <div style={{}}>
          {Array.from({ length: count }).map((_, i) => (
            <Card
              key={i}
              style={{ transform: `translateX(${i * 1.5}rem)`, zIndex: count - i }}
              className={`absolute top-0 left-0`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
