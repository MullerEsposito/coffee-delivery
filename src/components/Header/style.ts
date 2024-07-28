import styled, { css } from "styled-components"
import { mixins } from "../../styles/mixins"

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
  padding: 2rem 0;
`

export const LogoImg = styled.img`
  height: 2.5rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 12px;
  height: 2.375rem;

  & > div {
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.colors["purple-light"]};
    color: ${props => props.theme.colors["purple-dark"]};
    border-radius: 8px;
    padding: 8px;

    & > svg {
      color: ${props => props.theme.colors.purple};
    }
  }
`
interface ShoppingCartContainerProps {
  coffeesQuantity: number;
}
export const ShoppingCartContainer = styled.div<ShoppingCartContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors["yellow-light"]};
  color: ${props => props.theme.colors["yellow-dark"]};
  border-radius: 6px;
  padding: 8px;

  &::after {
    ${({ coffeesQuantity }) => coffeesQuantity && 
      css`
        position: absolute;
        top: -10px;
        right: -10px;
    
        ${mixins.fonts.textS};
        content: "${coffeesQuantity}";
        display: flex;
        justify-content: center;
        align-items: center;
        
        background-color: ${({ theme }) => theme.colors["yellow-dark"]};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        color: white;
      `
    }
  }
`