import { MapPin, ShoppingCart } from "@phosphor-icons/react"

import coffeeLogo from "../../assets/coffee-delivery-logo.svg"
import { ActionsContainer, HeaderContainer, LogoImg, ShoppingCartContainer } from "./style"
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers5/react"


export function Header() {
  const { open } = useWeb3Modal();
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  return (
    <HeaderContainer>
      <LogoImg src={coffeeLogo} />
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
        <ShoppingCartContainer>
          <ShoppingCart size={18} weight="fill" />
        </ShoppingCartContainer>
      </ActionsContainer>
    </HeaderContainer>
  )
}