import { createContext, ReactNode, useEffect, useState } from "react";
import { coffees as data } from "../data/index.json";
import { Coffee, CoffeeInCart } from "../@types/coffee";

interface CartContextType {
  coffees: Coffee[];
  coffeesInCart: CoffeeInCart[];
  addToCart: (coffee: CoffeeInCart) => void;
  removeFromCart: (id: string) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [coffees, setCoffees] = useState(data as Coffee[]);
  const [coffeesInCart, setCoffeesInCart] = useState<CoffeeInCart[]>([]);

  useEffect(() => {
    const coffeesInCartLocalStorage = localStorage.getItem("@muller-coffee-delivery:coffees-in-cart-1.0.0");
  
    if (coffeesInCartLocalStorage)
      setCoffeesInCart(JSON.parse(coffeesInCartLocalStorage));

  }, [])

  useEffect(() => {
    const coffeesInCartJSON = JSON.stringify(coffeesInCart);
    localStorage.setItem("@muller-coffee-delivery:coffees-in-cart-1.0.0", coffeesInCartJSON);
  }, [coffeesInCart])

  const addToCart = (coffee: CoffeeInCart) => {
    setCoffeesInCart(old => {
      const coffeeFound = old.find(({id}) => id === coffee.id);
      
      if (coffeeFound) { 
        if (coffee.quantity > 0) {
          return old.map(coffeeOld => coffeeOld.id === coffee.id ? coffee : coffeeOld);
        }
       return old.filter(coffeeOld => coffeeOld.id !== coffee.id);
      } else {
        return [...old, coffee];
      }
    });
  }

  const removeFromCart = (id: string) => {
    setCoffeesInCart(olds => {
      const coffeeFound = olds.find(old => old.id === id);
      
      if (coffeeFound)
        return olds.filter(old => old.id !== id);
      return olds;
    });
  }

  return (
    <CartContext.Provider value={{ coffees, coffeesInCart, addToCart, removeFromCart }}>
      { children }
    </CartContext.Provider>
  )
}