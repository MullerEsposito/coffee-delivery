import styled from "styled-components"
import { mixins } from "../../../../styles/mixins"

export const PayButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 3.187rem;
  width: 11.125rem;

  background-color: ${props => props.theme.colors["base-button"]};
  border-radius: 6px;
  transition: 0.3s;

  &:hover {
    background-color: ${props => props.theme.colors["base-hover"]};
  }

  &[data-state="true"] {
    background-color: ${({ theme }) => theme.colors['purple-light']};
    border-color: ${({ theme }) => theme.colors.purple};
  }
  
  & > label {
    display: flex;
    flex: 1;
    align-items: center;
    gap: 6px;
    margin: 0 1rem;
    
    ${mixins.fonts.textXS};
    font-size: 0.6rem;
    height: 100%;
    cursor: pointer;
  }

  & > input {
    display: none;
  }
`