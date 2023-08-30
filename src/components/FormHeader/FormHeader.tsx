import logo from '../../assets/logo.png';

interface FormHeaderProps {
    text: string;
}

export default function FormHeader({ text, ...props }: FormHeaderProps) {
    return (
        <>
            {' '}
            <img
                className="mx-auto h-64 w-auto"
                src={logo}
                alt="jolly logo"
            />
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{text}</h2>
        </>
    );
}
