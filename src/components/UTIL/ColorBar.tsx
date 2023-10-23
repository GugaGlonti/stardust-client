interface ColorBarProps {
  className?: string;
  height?: string;
  from?: string;
  to?: string;
}

export default function ColorBar({ className, height = '2', from = 'primary-light', to = 'secondary-dark', ...props }: ColorBarProps) {
  // FIXME: from and to should be injected into the className
  const classes = `h-${height} w-full bg-gradient-to-r from-primary-light to-secondary-dark background-animate ${className}`;

  return (
    <div
      className={classes}
      {...props}
    />
  );
}
