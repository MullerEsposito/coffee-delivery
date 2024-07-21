import styled from "styled-components"
import { mixins } from "../../../styles/mixins"

export const CoffeeCardContainer = styled.div`
  display: grid;
  grid-template-areas: 
    "img title title price"
    "img controls controls ."
  ;
  grid-template-columns: 4rem 1fr 3.435rem;
  grid-gap: 0 20px;
  padding: 2rem 0;
  border-bottom: 1px solid ${props => props.theme.colors["base-button"]};

  &:first-child {
    padding-top: 0;
  }

  & > img {
    width: 100%;
  }

  & > div {
    display: flex;
  }

  & > span {
   ${mixins.fonts.textM};
   font-weight: bold;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;

  & > div, button {
    height: 2rem;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 8px;
  gap: 4px;
  border-radius: 6px;
  background-color: ${props => props.theme.colors["base-button"]};
  ${mixins.fonts.textXS};
  font-weight: 500;
  color: ${props => props.theme.colors["base-text"]};
`