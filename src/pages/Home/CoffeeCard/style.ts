import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 3.25rem;
  padding: 0 1.5rem 1.5rem 1.5rem;
  height: 19.375rem;
  width: 16rem;
  background-color: ${ props => props.theme.base["base-card"]};
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

    & > span {
      background-color: ${props => props.theme.product["yellow-light"]};
      color: ${props => props.theme.product["yellow-dark"]};
      padding: 4px 8px;
      border-radius: 100px;

      font-size: 0.625rem;
      font-weight: bold;
      line-height: 130%;
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
      color: ${props => props.theme.base["base-label"]};
    }
  }

  & > footer {
    display: flex;
    justify-content: space-between;

    & > div > input {
      width: 2.5rem;
    }
  }

`

export const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
  font-weight: bold;
  font-size: 1.25rem;

  & > span {
    font-size: 0.7rem;
    font-weight: 400;
  }
`

export const ShoppingCartButtonContainer = styled.div`
  background-color: ${props => props.theme.product["purple-dark"]};
  border-radius: 6px;
`