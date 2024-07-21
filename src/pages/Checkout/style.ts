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
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: ${props => props.theme.colors["base-card"]};
  border-radius: 6px 44px 6px 44px;
`

export const ResumeOrder = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 12px;
  margin-top: 2rem;
  ${mixins.fonts.textS};


  & span:nth-child(even) {
    text-align: right;
  }

  & > span:nth-last-of-type(1),
  & > span:nth-last-of-type(2) {
    ${mixins.fonts.textL};
    font-weight: bold;
  }
`

export const OrderButton = styled.button`
  flex: 1;
  margin-top: 2rem;
  padding: 12px 8px;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.yellow};
  ${mixins.fonts.buttonG};
  color: ${props => props.theme.colors.white};
`