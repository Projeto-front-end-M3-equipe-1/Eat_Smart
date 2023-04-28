import { createContext } from 'react';

// Contexto criado para lógicas relacionadas ao estabelecimento (login, auto-login, etc...)

export interface ICompanyProviderProps {
  children: React.ReactNode;
}

export const CompanyContext = createContext({});

export const CompanyProvider = ({ children }: ICompanyProviderProps) => {
  return (
    <CompanyContext.Provider value={{}}>{children}</CompanyContext.Provider>
  );
};
