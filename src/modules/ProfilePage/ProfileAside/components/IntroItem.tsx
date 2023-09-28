interface IntroItemProps {
  children: any;
  icon?: JSX.Element;
  className?: string;
}

export default function IntroItem({ className, children, icon, ...props }: IntroItemProps) {
  if (!children) {
    return null;
  }

  return (
    <div
      className={`flex text-sm gap-2 p-2 ${className}`}
      {...props}>
      {icon}
      {children}
    </div>
  );
}
