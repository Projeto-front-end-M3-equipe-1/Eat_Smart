import { createContext } from 'react';

// Contexto criado para lógicas relacionadas ao usuario (login, auto-login, etc...)

export interface IUserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext({});

export const UserProvider = ({ children }: IUserProviderProps) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
