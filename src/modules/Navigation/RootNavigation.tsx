import NavButton from './components/NavButton';
import Button from '../../components/Button';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function RootNavigation() {
    const [signedIn, setSignedIn] = useState<boolean>(false);

    return (
        <div className="h-16 shadow-lg px-96 flex justify-between">
            <div className="flex justify-between gap-4 h-full">
                <NavButton to="">Home</NavButton>
                <NavButton to="/joker">Joker</NavButton>
                <NavButton to="/roulette">Roulette</NavButton>
            </div>
            <div className="flex justify-between items-center gap-4 h-full">
                <Button
                    variant="test"
                    onClick={() => setSignedIn(current => !current)}>
                    toggle signin
                </Button>
                {!!signedIn ? (
                    <>
                        <NavLink to="/signin">
                            <Button variant="primary">Sign In</Button>
                        </NavLink>
                        <NavLink to="/signup">
                            <Button variant="primary">Sign Up</Button>
                        </NavLink>
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
