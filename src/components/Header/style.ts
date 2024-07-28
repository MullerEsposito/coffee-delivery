import styled from "styled-components"

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

export const ShoppingCartContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors["yellow-light"]};
  color: ${props => props.theme.colors["yellow-dark"]};
  border-radius: 6px;
  padding: 8px;
`