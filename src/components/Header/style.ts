import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
  padding: 0 10rem;
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
    background-color: ${props => props.theme.product["purple-light"]};
    color: ${props => props.theme.product["purple-dark"]};
    border-radius: 8px;
    padding: 8px;

    & > svg {
      color: ${props => props.theme.product.purple};
    }
  }
`

export const ShoppingCartContainer = styled.a`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.product["yellow-light"]};
  color: ${props => props.theme.product["yellow-dark"]};
  border-radius: 6px;
  padding: 8px;
`