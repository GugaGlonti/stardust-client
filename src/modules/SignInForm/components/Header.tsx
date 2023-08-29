import logo from '../../../assets/logo.png';

export default function Header() {
    return (
        <>
            {' '}
            <img
                className="mx-auto h-64 w-auto"
                src={logo}
                alt="jolly logo"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </>
    );
}
