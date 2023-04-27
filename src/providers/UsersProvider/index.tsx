import { createContext } from "react";

export interface IUserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext({});

export const UserProvider = ({ children }: IUserProviderProps) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
