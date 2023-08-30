interface ProfileAsideProps {
    className?: string;
}

export default function ProfileAside({ className, ...props }: ProfileAsideProps) {
    return <div className={`m-16 p-8 bg-blue-400 rounded-2xl ${className}`}>Aside</div>;
}
