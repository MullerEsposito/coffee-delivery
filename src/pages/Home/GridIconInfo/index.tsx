import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { GridIconInfoContainer, IconInfoContainer } from "./style";
import { useTheme } from "styled-components";

export function GridIconInfo() {
  const theme = useTheme();

  return (
    <GridIconInfoContainer>
      <IconInfoContainer>
        <ShoppingCart 
          size={32} 
          weight="fill"
          color={theme.colors.background}
          style={{ backgroundColor: theme.colors["yellow-dark"]}}
        />
        <p>Simple and safe purchase</p>
      </IconInfoContainer>
      <IconInfoContainer>
        <Package 
          size={32} 
          weight="fill"
          color={theme.colors.background}
          style={{ backgroundColor: theme.colors["base-text"]}}
        />
        <p>Packaging keeps the coffee intact</p>
      </IconInfoContainer>
      <IconInfoContainer>
        <Timer 
          size={32} 
          weight="fill" 
          color={theme.colors.background}
          style={{ backgroundColor: theme.colors.yellow}}
        />
        <p>Fast and tracked delivery</p>
      </IconInfoContainer>
      <IconInfoContainer>
        <Coffee 
          size={32} 
          weight="fill" 
          color={theme.colors.background}
          style={{ backgroundColor: theme.colors.purple}}
        />
        <p>The coffee arrives fresh to you</p>
      </IconInfoContainer>
    </GridIconInfoContainer>
  )
}
