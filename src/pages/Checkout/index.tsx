import { CurrencyDollar, MapPin } from "@phosphor-icons/react";
import { AddressSection, CheckoutContainer, Form, LeftContainer, OrderButton, OrderSection, PaymentSection, ResumeOrder, RightContainer } from "./style";
import { InputForm } from "./InputForm";
import { PayButtons } from "./PayButtons";
import { PayButtonsContainer } from "./PayButtons/style";
import { PayButton } from "./PayButtons/PayButton";
import { CoffeeCard } from "./CoffeeCard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Checkout() {
  const { coffeesInCart } = useContext(CartContext);

  const coffeesPriceReduced = coffeesInCart.reduce((prev, curr) => 
    prev += (curr.quantity * curr.price)
  , 0)
  const deliverPrice = 3.50;
  const orderPriceFinal = coffeesPriceReduced + deliverPrice;


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
          {coffeesInCart.map(coffeeInCart => (
            <CoffeeCard 
              coffeeInCart={coffeeInCart} 
              key={coffeeInCart.id} 
            />
          ))}
          <ResumeOrder>
            <span>Total de itens</span> <span>R$ {coffeesPriceReduced.toFixed(2)}</span>
            <span>Entrega</span> <span>R$ {deliverPrice.toFixed(2)}</span>
            <span>Total</span> <span>R$ {orderPriceFinal.toFixed(2)}</span>
          </ResumeOrder>

          <Link to="/order/1/success">
            <OrderButton>CONFIRMAR PEDIDO</OrderButton>
          </Link>
        </OrderSection>
      </RightContainer>
    </CheckoutContainer>
  )
}