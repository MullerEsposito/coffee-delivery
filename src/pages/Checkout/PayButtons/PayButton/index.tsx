import { HTMLAttributes, InputHTMLAttributes, useContext } from "react";
import { PayButtonContainer } from "./style";
import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { PayButtonsContext } from "../context";
import { PaymentMethods } from "../types";

interface PayButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  payType: "credit" | "debit" | "money";
  containerProps?: HTMLAttributes<HTMLDivElement>;
}

export function PayButton({ containerProps, payType, ...inputProps }: PayButtonProps) {
  const { selectedPayment, definePaymentMethod } = useContext(PayButtonsContext);

  const handlePayButtonClick = ({ currentTarget: { id } }: React.MouseEvent) => {
    definePaymentMethod(id as PaymentMethods);
  }

  const renderCreditCardButton = () => (
    <PayButtonContainer onClick={handlePayButtonClick} id="credit-card" data-state={selectedPayment === "credit-card"}>
      <label htmlFor="button-credit-card">
        <CreditCard size={16} />
        CARTÃO DE CRÉDITO
      </label>
      <input 
        {...inputProps} 
        id="button-credit-card" 
        type="radio" 
        name="payments"
      />
    </PayButtonContainer>  
  )

  const renderDebitCardButton = () => (
    <PayButtonContainer onClick={handlePayButtonClick} id="debit-card" data-state={selectedPayment === "debit-card"}>
      <label htmlFor="button-debit-card">
        <Bank size={16} />
        CARTÃO DE DÉBITO
      </label>
      <input {...inputProps} id="button-debit-card" type="radio" name="payments"/>
    </PayButtonContainer>  
  )

  const renderMoneyButton = () => (
    <PayButtonContainer onClick={handlePayButtonClick} id="money" data-state={selectedPayment === "money"}>
      <label htmlFor="button-money">
        <Money size={16} />
        DINHEIRO
      </label>
      <input {...inputProps} id="button-money" type="radio" name="payments"/>
    </PayButtonContainer>
  )
  
  switch (payType) {
    case "credit":
      return renderCreditCardButton();
    case "debit":
      return renderDebitCardButton();
    case "money":
      return renderMoneyButton();
  }
}