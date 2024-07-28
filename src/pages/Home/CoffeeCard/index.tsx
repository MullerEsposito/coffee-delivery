import { ShoppingCart } from "@phosphor-icons/react";
import { CoffeeCardContainer, PriceContainer, ShoppingCartButtonContainer, ShoppingControlsContainer, TypesContainer } from "./style";

import { InputNumber } from "../../../components/InputNumber";
import { useContext, useState } from "react";
import { CartContext, CoffeeInCart } from "../../../contexts/CartContext";

type CoffeeTypes = "tradicional" | "com leite" | "gelado" | "especial";

export type Coffee = {
  id: string;
  tags: CoffeeTypes[];
  title: string;
  description: string;
  price: number;
  image: string;
}

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee: { id, tags, title, description, price, image }}: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(0);

  const { addToCart } = useContext(CartContext);

  const handleClickCartButton = () => {
    const coffeeInCart: CoffeeInCart = {
      id,
      quantity,
      price
    }
    
    addToCart(coffeeInCart);
  }
  
  return (
    <CoffeeCardContainer>
      <header>
        <img src={image} />
        <TypesContainer>
          {tags.map((tag, idx) => (
            <span key={idx}>{tag.toUpperCase()}</span>
          ))}
        </TypesContainer>
        <h3>{ title }</h3>
        <p>{ description }</p>
      </header>

      <footer>
        <PriceContainer>
          <span>
            R$
          </span>
          {price.toFixed(2).replace(".", ",")}
        </PriceContainer>
        
        <ShoppingControlsContainer>
          <InputNumber min={0} getValue={setQuantity} />
          <ShoppingCartButtonContainer onClick={handleClickCartButton}>
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartButtonContainer>
        </ShoppingControlsContainer>
      </footer>
    </CoffeeCardContainer>
  )
}