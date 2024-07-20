import styled from "styled-components"
import { mixins } from "../../styles/mixins"

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;
  
  & h2 {
    ${mixins.fonts.titleXS};
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem 0;
  width: 640px;
`

const HeaderBase = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${props => props.theme.colors["base-card"]};

  & > header {
    display: flex;
    gap: 8px;
    
    & h3 {
      ${mixins.fonts.textM};
      color: ${props => props.theme.colors["base-subtitle"]};
    }

    & p {
      ${mixins.fonts.textS};
      color: ${props => props.theme.colors["base-text"]};
    }
  }
`
export const AddressSection = styled(HeaderBase)`  
  svg {
    fill: ${props => props.theme.colors["yellow-dark"]};
    border-bottom: 2px solid ${props => props.theme.colors["yellow-dark"]};
  }
`
export const Form = styled.form`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-gap: 16px 12px;
`

export const PaymentSection = styled(HeaderBase)`
  svg {
    fill: ${props => props.theme.colors.purple};
  }
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  gap: 0.75rem 0;
`
export const OrderSection = styled.div`
  padding: 2.5rem;
  background-color: ${props => props.theme.colors["base-card"]};
`