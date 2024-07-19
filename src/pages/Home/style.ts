import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HomeContainer = styled.main`
  padding: 5.68rem 10rem;
  font-family: "Roboto", sans-serif;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    padding-bottom: 8rem;
  }

  & img {
    overflow: auto;
  }

  & h2 {
    ${mixins.fonts.titleL};
    color: ${props => props.theme.base["base-subtitle"]};
  }
`

export const ContentBannerContainer = styled.div`
  width: 36.375rem;

  & > h1 {
    ${mixins.fonts.titleXL};
    color: ${props => props.theme.base["base-title"]};
  }

  & > p {
    ${mixins.fonts.textL};
    color: ${props => props.theme.base["base-title"]};
    padding-top: 10px;
  }
`

export const CoffeeCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  & > div {
    display: grid;
    grid-template-columns: repeat(4, auto);
    column-gap: 20px;
  }
`