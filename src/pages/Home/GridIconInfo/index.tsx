import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { GridIconInfoContainer, IconInfoContainer } from "./style";
import { useTheme } from "styled-components";

export function GridIconInfo() {
  const theme = useTheme();

  return (
    <GridIconInfoContainer>
      <IconInfoContainer background-color="yellow-dark">
        <ShoppingCart 
          size={32} 
          weight="fill"
          color={theme.base.background}
          style={{ backgroundColor: theme.product["yellow-dark"]}}
        />
        <p>Simple and safe purchase</p>
      </IconInfoContainer>
      <IconInfoContainer background-color="yellow">
        <Package 
          size={32} 
          weight="fill"
          color={theme.base.background}
          style={{ backgroundColor: theme.base["base-text"]}}
        />
        <p>Packaging keeps the coffee intact</p>
      </IconInfoContainer>
      <IconInfoContainer background-color="text">
        <Timer 
          size={32} 
          weight="fill" 
          color={theme.base.background}
          style={{ backgroundColor: theme.product.yellow}}
        />
        <p>Fast and tracked delivery</p>
      </IconInfoContainer>
      <IconInfoContainer background-color="purple">
        <Coffee 
          size={32} 
          weight="fill" 
          color={theme.base.background}
          style={{ backgroundColor: theme.product.purple}}
        />
        <p>The coffee arrives fresh to you</p>
      </IconInfoContainer>
    </GridIconInfoContainer>
  )
}
