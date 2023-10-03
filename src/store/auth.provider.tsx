import { createContext, FC, ReactNode, useState } from 'react';
import { User } from '../types/user.interface';

interface AuthContext {
  user: User | null;
  setUser?: (user: User) => void;
}

export const authContext = createContext<AuthContext>({
  user: null,
  setUser: () => {},
});

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const authContextValues: AuthContext = {
    user: user,
    setUser: setUser,
  };

  return <authContext.Provider value={authContextValues}>{children}</authContext.Provider>;
};
