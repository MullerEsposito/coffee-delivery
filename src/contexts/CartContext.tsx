import { createContext, ReactNode, useState } from "react";

export type CoffeeInCart = {
  id: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  coffeesInCart: CoffeeInCart[];
  addToCart: (coffee: CoffeeInCart) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [coffeesInCart, setCoffeesInCart] = useState<CoffeeInCart[]>([]);

  const addToCart = (coffee: CoffeeInCart) => {
    setCoffeesInCart(old => {
      const coffeeFound = old.find(({id}) => id === coffee.id);
      
      if (coffeeFound) {
        console.log(`Quantidade do Input: ${coffee.quantity}`);
        
        coffeeFound.quantity += coffee.quantity;
        console.log(`Quantidade: ${coffeeFound.quantity}`);
        
        return old.map((coffeeOld) => coffeeOld.id === coffee.id ? coffeeFound : coffeeOld);
      } else {
        return [...old, coffee];
      }
    });
  }

  return (
    <CartContext.Provider value={{ coffeesInCart, addToCart }}>
      { children }
    </CartContext.Provider>
  )
}