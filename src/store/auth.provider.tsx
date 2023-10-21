import { createContext, FC, ReactNode, useCallback, useState } from 'react';

import { User } from '../types/interfaces';

interface AuthContext {
  loggedInUser: User | null;
  setLoggedInUser: (user: User) => void;
  isLoggedIn: boolean;
}

export const authContext = createContext<AuthContext>({
  loggedInUser: null,
  setLoggedInUser: () => {},
  isLoggedIn: false,
});

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const setLoggedInUser = useCallback((user: User) => setUser(user), [setUser]);

  const authContextValues: AuthContext = {
    loggedInUser: user,
    setLoggedInUser,
    isLoggedIn: !!user,
  };

  return <authContext.Provider value={authContextValues}>{children}</authContext.Provider>;
};
