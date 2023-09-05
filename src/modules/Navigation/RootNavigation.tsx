import { useState } from 'react';
import { NavLink, useRouteLoaderData } from 'react-router-dom';

import NavButton from './components/NavButton';
import ColorBar from '../../components/UTIL/ColorBar';
import Button from '../../components/Button';

import NotificationIcon from '../../assets/svg/NotificationIcon';
import SettingsIcon from '../../assets/svg/SettingsIcon';
import ChatIcon from '../../assets/svg/ChatIcon';

import { ProfileData } from '../../services/user.service';

export default function RootNavigation() {
    const [signedIn, setSignedIn] = useState<boolean>(false);

    const loggedInUser = useRouteLoaderData('root') as ProfileData;
    const { username } = loggedInUser;

    return (
        <>
            <ColorBar />

            <div className="h-16 shadow-lg px-96 flex justify-between">
                <div className="flex justify-between gap-4 h-full">
                    <>
                        <>
                            <NavButton to="">Home</NavButton>
                            <NavButton to="/joker">Joker</NavButton>
                            <NavButton to="/roulette">Roulette</NavButton>
                        </>
                    </>
                </div>
                <div className="flex justify-between items-center gap-4 h-full">
                    <>
                        <>
                            <Button
                                variant="test"
                                onClick={() => setSignedIn(current => !current)}>
                                toggle signin
                            </Button>
                        </>
                    </>

                    {!!signedIn ? (
                        <>
                            <NavLink to="/signin">
                                <Button variant="primary">Sign In</Button>
                            </NavLink>
                            <NavLink to="/signup">
                                <Button variant="secondary">Sign Up</Button>
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavButton to="/notification">
                                <NotificationIcon />
                            </NavButton>

                            <NavButton to="/messages">
                                <ChatIcon />
                            </NavButton>

                            <NavButton to={`/${username}`}>{username}</NavButton>

                            <NavButton to="/settings">
                                <SettingsIcon />
                            </NavButton>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
