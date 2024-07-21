import styled from "styled-components"

export const InputNumberContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;
`

export const Input = styled.input.attrs({ type: "number" })`
  width: 4rem;
  height: 2.375rem;
  border: none;
  background-color: ${props => props.theme.colors["base-button"]};
  text-align: center;
  padding-left: 10px;
  font-size: 1rem;
  line-height: 130%;
  font-family: "Roboto";
  font-weight: 400;
`

const Button = styled.button`
  width: 20px;
  height: 30px;
  color: ${props => props.theme.colors.purple};
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    opacity: 0.8;
  }
`

export const ButtonMinus = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3px;
  z-index: 10;
  background: none;
  margin-right: -22px;
  font-size: 2.5rem;
`

export const ButtonPlus = styled(Button)`
  z-index: 10;
  background: none;
  margin-left: -25px;
`