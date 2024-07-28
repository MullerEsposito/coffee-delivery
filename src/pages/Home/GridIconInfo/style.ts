import styled from "styled-components";

export const GridIconInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.75rem;
  width: 35.4375rem;
  margin-top: 3rem;
`
export const IconInfoContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  font-weight: 400;
  font-size: 0.9rem;

  & > svg {
    padding: 8px;
    border-radius: 50%;
  }
`