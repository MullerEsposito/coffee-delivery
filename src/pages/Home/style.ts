import styled from "styled-components";

export const HomeContainer = styled.main`
  padding: 5.68rem 10rem;
  font-family: "Roboto", sans-serif;

  & > div {
    display: flex;
    justify-content: space-between;
  }
`

export const ContentBannerContainer = styled.div`
  width: 36.375rem;

  & > h1 {
    font-family: "Baloo", sans-serif;
    font-size: 3rem;
  }

  & > p {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
    padding-top: 10px;
  }
`

export const CoffeeCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
`