import { createContext, FC, ReactNode, useState } from 'react';

import { User } from '../types/interfaces';

interface AuthContext {
  loggedInUser: User | null;
  setLoggedInUser?: (user: User) => void;
  isLoggedIn: boolean;
}

export const authContext = createContext<AuthContext>({
  loggedInUser: null,
  setLoggedInUser: () => {},
  isLoggedIn: false,
});

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const authContextValues: AuthContext = {
    loggedInUser: user,
    setLoggedInUser: setUser,
    isLoggedIn: !!user,
  };

  return <authContext.Provider value={authContextValues}>{children}</authContext.Provider>;
};
