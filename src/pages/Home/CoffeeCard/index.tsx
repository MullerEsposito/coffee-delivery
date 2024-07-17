import { ShoppingCart } from "@phosphor-icons/react";
import { CoffeeCardContainer, PriceContainer, ShoppingCartButtonContainer } from "./style";

import coffee1 from "../../../assets/coffees/coffee1.png";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <header>
        <img src={coffee1} />
        <span>Tradicional</span>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </header>

      <footer>
        <PriceContainer>
          <span>
            R$
          </span>
          9,90
        </PriceContainer>
        
        <div>
          <input type="number" defaultValue={0} />
          <ShoppingCartButtonContainer>
            <ShoppingCart size={16} weight="fill" />
          </ShoppingCartButtonContainer>
        </div>
      </footer>
    </CoffeeCardContainer>
  )
}