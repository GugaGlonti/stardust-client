import NavButton from './components/NavButton';

export default function RootNavigation() {
    return (
        <div className="h-16 shadow-lg px-96 flex justify-between">
            <div className="flex justify-between gap-8 h-full">
                <NavButton to="home">Home</NavButton>
                <NavButton to="">home</NavButton>
                <NavButton to="">home</NavButton>
            </div>
            <div className="flex justify-between gap-8 h-full">
                <NavButton to="/signin">Sign In</NavButton>
                <NavButton to="/signup">Sign Up</NavButton>
            </div>
        </div>
    );
}
