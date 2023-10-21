interface ColorBarProps {
  className?: string;
  height?: string;
  from?: string;
  to?: string;
}

export default function ColorBar({ className, height = '2', from = 'primary-light', to = 'secondary-dark', ...props }: ColorBarProps) {
  const classes = `h-${height} bg-gradient-to-r from-${from} to-${to} background-animate ${className}`;

  return (
    <div
      className={classes}
      {...props}
    />
  );
}
