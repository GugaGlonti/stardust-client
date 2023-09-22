interface ColorBarProps {
  className?: string;
  height?: string;
}

export default function ColorBar({ className, height = '2', ...props }: ColorBarProps) {
  return (
    <div
      className={`h-${height} bg-gradient-to-r from-primary-light to-secondary-dark background-animate ${className}`}
      {...props}
    />
  );
}
