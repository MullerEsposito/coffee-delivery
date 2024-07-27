import { CurrencyDollar, MapPin } from "@phosphor-icons/react";
import { AddressSection, CheckoutContainer, Form, LeftContainer, OrderButton, OrderSection, PaymentSection, ResumeOrder, RightContainer } from "./style";
import { InputForm } from "./InputForm";
import { PayButtons } from "./PayButtons";
import { PayButtonsContainer } from "./PayButtons/style";
import { PayButton } from "./PayButtons/PayButton";
import { CoffeeCard } from "./CoffeeCard";
import { Link } from "react-router-dom";

export function Checkout() {
  const renderAddressSection = () => (
    <>
      <h2>Complete seu pedido</h2>
      <AddressSection>
        <header>
          <MapPin size={22} weight="bold" />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço de entrega onde deseja receber o seu pedido</p>
          </div>
        </header>
        <Form>
          <InputForm placeholder="CEP" containerProps={{ style: { gridArea: "cep" } }}/>
          <InputForm placeholder="Rua" containerProps={{ style: { gridArea: "street" } }}/>
          <InputForm placeholder="Número" containerProps={{ style: { gridArea: "number" } }}/>
          <InputForm placeholder="Complemento" containerProps={{ style: { gridArea: "fullAddress" } }}/>
          <InputForm placeholder="Bairro" containerProps={{ style: { gridArea: "neighborhood" } }}/>
          <InputForm placeholder="Cidade" containerProps={{ style: { gridArea: "city" } }}/>
          <InputForm placeholder="UF" containerProps={{ style: { gridArea: "state" } }}/>
        </Form>
      </AddressSection>
    </>
  )

  const renderPaymentSection = () => (
    <PaymentSection>
      <header>
        <CurrencyDollar size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>          
        </div>
      </header>
      <PayButtonsContainer>
        <PayButtons>
          <PayButton payType="credit" />
          <PayButton payType="debit" />
          <PayButton payType="money" />
        </PayButtons>
      </PayButtonsContainer>
    </PaymentSection>
  )

  return (
    <CheckoutContainer>
      <LeftContainer>
        { renderAddressSection() }
        { renderPaymentSection() }
      </LeftContainer>
      <RightContainer>
        <h2>Cafés selecionados</h2>
        <OrderSection>
          <CoffeeCard />
          <CoffeeCard />
          <ResumeOrder>
            <span>Total de itens</span> <span>R$ 29,70</span>
            <span>Entrega</span> <span>R$ 3,50</span>
            <span>Total</span> <span>R$ 33,20</span>
          </ResumeOrder>

          <Link to="/order/1/success">
            <OrderButton>CONFIRMAR PEDIDO</OrderButton>
          </Link>
        </OrderSection>
      </RightContainer>
    </CheckoutContainer>
  )
}