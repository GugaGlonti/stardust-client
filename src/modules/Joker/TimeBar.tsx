interface TimeBarProps {
  className?: string;
}

export default function TimeBar({ className, ...props }: TimeBarProps) {
  return <div className={`${className} h-2`}></div>;
}
