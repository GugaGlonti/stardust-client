import { createContext, FC, ReactNode, useState } from 'react';
import { User } from '../types/user.interface';

interface AuthContext {
  loggedInUser: User | null;
  setLoggedInUser?: (user: User) => void;
}

export const authContext = createContext<AuthContext>({
  loggedInUser: null,
  setLoggedInUser: () => {},
});

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const authContextValues: AuthContext = {
    loggedInUser: user,
    setLoggedInUser: setUser,
  };

  return <authContext.Provider value={authContextValues}>{children}</authContext.Provider>;
};
