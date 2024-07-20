import { MapPin } from "@phosphor-icons/react";
import { AddressSection, CheckoutContainer, Form, LeftContainer, OrderSection, PaymentSection, RightContainer } from "./style";
import { InputForm } from "./InputForm";

export function Checkout() {
  return (
    <CheckoutContainer>
      <LeftContainer>
        <h2>Complete seu pedido</h2>
        <AddressSection>
          <header>
            <MapPin size={22} />
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
        <PaymentSection>
          Pagamento
        </PaymentSection>
      </LeftContainer>
      <RightContainer>
        <h2>Cafés selecionados</h2>
        <OrderSection>
          Dados do Pedido
        </OrderSection>
      </RightContainer>
    </CheckoutContainer>
  )
}