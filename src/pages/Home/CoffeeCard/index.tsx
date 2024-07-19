import { ShoppingCart } from "@phosphor-icons/react";
import { CoffeeCardContainer, PriceContainer, ShoppingCartButtonContainer, ShoppingControlsContainer, TypesContainer } from "./style";

import { InputNumber } from "./InputNumber";

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

export function CoffeeCard({ coffee: { tags, title, description, price, image }}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <header>
        <img src={image} />
        <TypesContainer>
          {tags.map(tag => (
            <span>{tag.toUpperCase()}</span>
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
          <InputNumber min={0} />
          <ShoppingCartButtonContainer>
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartButtonContainer>
        </ShoppingControlsContainer>
      </footer>
    </CoffeeCardContainer>
  )
}