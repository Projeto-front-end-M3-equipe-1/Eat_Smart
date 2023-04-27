import { createContext } from "react";

export interface ICartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({});

export const CartProvider = ({ children }: ICartProviderProps) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};
