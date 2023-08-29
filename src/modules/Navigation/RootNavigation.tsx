import NavButton from './components/NavButton';
import Button from '../../components/Button/Button';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function RootNavigation() {
    const [signedIn, setSignedIn] = useState<boolean>(false);

    return (
        <div className="h-16 shadow-lg px-96 flex justify-between">
            <div className="flex justify-between gap-8 h-full">
                <NavButton to="">Home</NavButton>
                <NavButton to="/joker">Joker</NavButton>
                <NavButton to="/roulette">Roulette</NavButton>
            </div>
            <div className="flex justify-between gap-8 h-full">
                <Button
                    variant="test"
                    onClick={() => setSignedIn(current => !current)}>
                    toggle signin
                </Button>
                {!!signedIn ? (
                    <>
                        <Button variant="primary">
                            <NavLink to="/signin">Sign In</NavLink>
                        </Button>
                        <Button variant="primary">
                            <NavLink to="/signup">Sign Up</NavLink>
                        </Button>
                    </>
                ) : (
                    <>
                        <NavButton to="/notification">Notifications</NavButton>
                        <NavButton to="/messages">Messages</NavButton>
                        <NavButton to="/profile">Your Profile</NavButton>
                        <NavButton to="/settings">Settings</NavButton>
                    </>
                )}
            </div>
        </div>
    );
}
