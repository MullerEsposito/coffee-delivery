import { createContext, ReactNode, useEffect, useState } from "react";
import { coffees as data } from "../data/index.json";
import { Coffee, CoffeeInCart } from "../@types/coffee";
import { produce } from "immer";

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
    const coffeeIndexFound = coffeesInCart.findIndex(({id}) => id === coffee.id);
    const isCoffeeExist = coffeeIndexFound >= 0;
    
    const nextState = produce(coffeesInCart, draft => {      
      if (isCoffeeExist) { 
        if (coffee.quantity > 0) {
          draft[coffeeIndexFound].quantity = coffee.quantity;
        } else {
          draft.splice(coffeeIndexFound, 1);
        }
      }
    })

    setCoffeesInCart(nextState);
  }

  const removeFromCart = (id: string) => {
    const coffeeIndexFound = coffeesInCart.findIndex(coffee => coffee.id === id);
    const isCoffeeExist = coffeeIndexFound >= 0;

    const nextState = produce(coffeesInCart, draft => {
      if (isCoffeeExist) { 
        draft.splice(coffeeIndexFound, 1);      
      }
    })

    setCoffeesInCart(nextState);
  }

  return (
    <CartContext.Provider value={{ coffees, coffeesInCart, addToCart, removeFromCart }}>
      { children }
    </CartContext.Provider>
  )
}