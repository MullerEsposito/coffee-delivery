import { MapPin, ShoppingCart } from "@phosphor-icons/react"

import coffeeLogo from "../../assets/coffee-delivery-logo.svg"
import { ActionsContainer, HeaderContainer, LogoImg, ShoppingCartContainer } from "./style"
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers5/react"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


export function Header() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();
  const { coffeesInCart } = useContext(CartContext);

  return (
    <HeaderContainer>
      <Link to="/">
        <LogoImg src={coffeeLogo} />
      </Link>
      <ActionsContainer>
        <div>
          {isConnected ? (
            "Wallet: " + address?.slice(0,5) + "..." + address?.slice(-5)
          ) : (
            <button onClick={() => open()}>Open Connect Modal</button>
          )}
        </div>
        <div>
          <MapPin size={18} weight="fill" />
          Brussels, BE
        </div>
        <Link to={`/checkout`}>
          <ShoppingCartContainer coffeesQuantity={coffeesInCart.length}>
            <ShoppingCart size={18} weight="fill" />
          </ShoppingCartContainer>
        </Link>
      </ActionsContainer>
    </HeaderContainer>
  )
}