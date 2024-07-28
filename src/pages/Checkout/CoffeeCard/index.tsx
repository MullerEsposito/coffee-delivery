import { HTMLAttributes, useContext, useEffect, useState } from "react";
import { InputNumber } from "../../../components/InputNumber";
import { ActionsContainer, CoffeeCardContainer, RemoveButton } from "./style";
import { Trash } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { CoffeeInCart } from "../../../@types/coffee";
import { CartContext } from "../../../contexts/CartContext";

interface CoffeeCardProps {
  containerProps?: HTMLAttributes<HTMLDivElement>;
  coffeeInCart: CoffeeInCart;
}

export function CoffeeCard({ containerProps, coffeeInCart }: CoffeeCardProps) {
  const [inputValue, setInputValue] = useState(coffeeInCart.quantity);
  const { coffees, removeFromCart, addToCart } = useContext(CartContext);
  const theme = useTheme();

  const coffee = coffees.find(coffee => coffee.id === coffeeInCart.id);
  
  const coffeePriceReduced = (coffee!.price * inputValue).toFixed(2);
  
  useEffect(() => {
    addToCart({ id: coffee!.id, quantity: inputValue, price: coffee!.price });
  }, [inputValue])


  return coffee && (
    <CoffeeCardContainer {...containerProps}>
      <img src={coffee.image} style={{ gridArea: "img" }} />
      <p style={{ gridArea: "title"}}>{coffee.title}</p>
      <ActionsContainer style={{ gridArea: "controls" }}>
        <InputNumber min={0} defaultValue={coffeeInCart.quantity} getValue={setInputValue}/>
        <RemoveButton onClick={() => removeFromCart(coffee.id)}>
          <Trash size={16} fill={theme.colors.purple} />
          REMOVER
        </RemoveButton>
      </ActionsContainer>
      <span style={{ gridArea: "price"}}>R$ {coffeePriceReduced}</span>
    </CoffeeCardContainer>
  )
}