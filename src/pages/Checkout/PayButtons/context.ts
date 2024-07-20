import { createContext } from "react";
import { PaymentMethods } from "./types";

interface PayButtonsContextType {
  selectedPayment: PaymentMethods | undefined;
  definePaymentMethod: (paymentMethod: PaymentMethods) => void;
}

export const PayButtonsContext = createContext({} as PayButtonsContextType);