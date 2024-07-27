import styled from "styled-components"
import { mixins } from "../../../styles/mixins"

export const InputFormContainer = styled.div`

& > input {
    background-color: ${props => props.theme.colors["base-input"]};
    border: 1px solid ${props => props.theme.colors["base-button"]};
    border-radius: 4px;
    height: 2.625rem;
    width: 100%;
    outline: none;

    padding: 12px;

    ${mixins.fonts.textS};
    color: ${props => props.theme.colors["base-text"]};    

    &::placeholder {
      color: ${props => props.theme.colors["base-label"]};
    }

    &:focus {
      border: 1px solid ${props => props.theme.colors["yellow-dark"]};
    }
  }
`