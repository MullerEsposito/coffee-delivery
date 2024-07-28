import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1.5rem 1.5rem 1.5rem;
  height: 19.375rem;
  width: 16rem;
  background-color: ${ props => props.theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;

  & > header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;

    & > img {
      margin-top: -20px;
      width: 7.5rem;
    }

    & > h3 {
      font-family: "Baloo", sans-serif;
      font-size: 1.25rem;
      font-weight: bold;
      line-height: 130%;
    }


    & > p {
      text-align: center;
      font-size: 0.875rem;
      line-height: 130%;
      font-weight: 400;
      color: ${props => props.theme.colors["base-label"]};
    }
  }

  & > footer {
    display: flex;
    justify-content: space-between;
  }

`

export const TypesContainer = styled.div`
  display: flex;
  
  & > span {
    background-color: ${props => props.theme.colors["yellow-light"]};
    color: ${props => props.theme.colors["yellow-dark"]};
    padding: 4px 8px;
    border-radius: 100px;
    
    
    line-height: 130%;
    margin-top: 7px;
    font-size: 0.9rem;
    font-weight: bold;
  }
  `

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${props => props.theme.colors["base-text"]};

  & > span {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 4px;
  }
`

export const ShoppingControlsContainer = styled.div`
  display: flex;
  gap: 8px;

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & > input[type="number"] {

    width: 4.5rem;
    height: 2.375rem;
    border: none;
    border-radius: 6px;
    background-color: ${props => props.theme.colors["base-button"]};
    text-align: center;

    font-size: 1rem;
    line-height: 130%;
    font-family: "Roboto";
    font-weight: 400;
  }
`

export const ShoppingCartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors["purple-dark"]};
  color: ${props => props.theme.colors.white};
  
  width: 2.375rem;
  padding: 8px;
  border-radius: 6px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.purple};
  }
`