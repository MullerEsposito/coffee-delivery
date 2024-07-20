import { ReactNode, useState } from "react";
import { PaymentMethods } from "./types";
import { PayButtonsContext } from "./context";

interface PayButtonsProps {
  children: ReactNode;
}

export function PayButtons({ children }: PayButtonsProps) {
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethods>();

  const definePaymentMethod = (paymentMethod: PaymentMethods) => {
    setSelectedPayment(paymentMethod);
  }

  return (
    <PayButtonsContext.Provider value={{ selectedPayment, definePaymentMethod }}>
      {children}
    </PayButtonsContext.Provider>
  )
}