import styled from "styled-components"

export const InputNumberContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input.attrs({ type: "number" })`
  width: 4rem;
  height: 2.375rem;
  border: none;
  border-radius: 6px;
  background-color: ${props => props.theme.colors["base-button"]};
  text-align: center;

  font-size: 1rem;
  line-height: 130%;
  font-family: "Roboto";
  font-weight: 400;
`

const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: #f2f2f2;
  color: ${props => props.theme.colors.purple};
  border: none;
  cursor: pointer;
  line-height: 30px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  &:hover {
    opacity: 0.8;
  }
`

export const ButtonMinus = styled(Button)`
  z-index: 10;
  background: none;
  margin-right: -25px;
`

export const ButtonPlus = styled(Button)`
  z-index: 10;
  background: none;
  margin-left: -25px;
`