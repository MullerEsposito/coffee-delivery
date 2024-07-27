import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const SuccessHeader = styled.header`
  & > h1 {
    ${mixins.fonts.titleL};
    color: ${({ theme}) => theme.colors["yellow-dark"]};
  }

  & p {
    ${mixins.fonts.textL};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
`

export const OrderInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  width: 32.875rem;
  margin-top: 2.3125rem;
  padding: 2.5rem;

  border: 1px solid;
  border-radius: 6px 36px;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, ${({theme}) => theme.colors.yellow}, ${({theme}) => theme.colors.purple});
`

interface OrderInfoProps {
  background?: string;
}
export const OrderInfo = styled.div<OrderInfoProps>`
  display: flex;
  gap: 12px;
  align-items: center;
  

  border-radius: 50%;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${props => props.background};
  }
`

export const IllustrationContainer = styled.div`

`