import { MapPin, ShoppingCart } from "@phosphor-icons/react"

import coffeeLogo from "../../assets/coffee-delivery-logo.svg"
import { ActionsContainer, HeaderContainer, LogoImg, ShoppingCartContainer } from "./style"


export function Header() {
  return (
    <HeaderContainer>
      <LogoImg src={coffeeLogo} />
      <ActionsContainer>
        <div>
          <MapPin size={18} weight="fill" />
          Brussels, BE
        </div>
        <ShoppingCartContainer>
          <ShoppingCart size={18} weight="fill" />
        </ShoppingCartContainer>
      </ActionsContainer>
    </HeaderContainer>
  )
}