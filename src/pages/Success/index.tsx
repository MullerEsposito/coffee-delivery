import { IllustrationContainer, OrderInfo, OrderInfoContainer, SuccessContainer, SuccessHeader } from "./styled";

import illustrationImg from "../../assets/illustration.png";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useTheme } from "styled-components";

export function Success() {
  const theme = useTheme();

  return (
    <>
      <SuccessHeader>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessHeader>
      <SuccessContainer>
        <OrderInfoContainer>
          <OrderInfo background={theme.colors.purple} >
            <span>
              <MapPin size={16} fill="white" weight="fill" />
            </span>
            <address>
              <p>Entrega em <b>Rua João Daniel Martinelli, 102</b></p>
              <p>Farrapos - Porto Alegre, RS</p>
            </address>
          </OrderInfo>
          <OrderInfo background={theme.colors.yellow}>
            <span>
              <Timer size={16} fill="white" weight="fill"/>
            </span>
            <div>
              <p>Previsão de entrega</p>
              <p><b>20 min - 30 min</b></p>
            </div>
          </OrderInfo>
          <OrderInfo background={theme.colors["yellow-dark"]}>
            <span>
              <CurrencyDollar size={16} fill="white" weight="fill"/>
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <p><b>Cartão de Crédito</b></p>
            </div>
          </OrderInfo>
        </OrderInfoContainer>
        <IllustrationContainer>
          <img src={illustrationImg} />
        </IllustrationContainer>
      </SuccessContainer>
    </>
  )
}