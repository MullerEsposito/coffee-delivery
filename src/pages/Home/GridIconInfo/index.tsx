import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { GridIconInfoContainer, IconInfoContainer } from "./style";

export function GridIconInfo() {
  return (
    <GridIconInfoContainer>
      <IconInfoContainer background-color="yellow-dark">
        <span>
          <ShoppingCart size={16} weight="fill" />
        </span>
        <p>Simple and safe purchase</p>
      </IconInfoContainer>
      <IconInfoContainer background-color="yellow">
        <span>
          <Package size={16} weight="fill" />
        </span>
        <p>Packaging keeps the coffee intact</p>
      </IconInfoContainer>
      <IconInfoContainer background-color="text">
        <span>
          <Timer size={16} weight="fill" />
        </span>
        <p>Fast and tracked delivery</p>
      </IconInfoContainer>
      <IconInfoContainer background-color="purple">
        <span>
          <Coffee size={16} weight="fill" />
        </span>
        <p>The coffee arrives fresh to you</p>
      </IconInfoContainer>
    </GridIconInfoContainer>
  )
}
