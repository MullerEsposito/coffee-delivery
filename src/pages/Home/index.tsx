import { useContext } from "react";
import coffeeDeliveryBanner from "../../assets/coffee-delivery-banner.png";
import { CoffeeCard } from "./CoffeeCard";
import { GridIconInfo } from "./GridIconInfo";
import { CoffeeCardsContainer, ContentBannerContainer, HomeContainer } from "./style";
import { CartContext } from "../../contexts/CartContext";

export function Home() {
  const { coffees } = useContext(CartContext);
  
  return (
    <HomeContainer>
      <div>
        <div>
          <ContentBannerContainer>
            <h1>Find the perfect coffee for any hour of your day</h1>
            <p>Using the DCoffee Delivery you pay your coffee with crypt and receive where you are, anytime</p>            
          </ContentBannerContainer>

          <GridIconInfo />
        </div>
        <img src={coffeeDeliveryBanner} />
      </div>
      
      <CoffeeCardsContainer>
        <h2>Nossos Cafés</h2>
        <div>
          {coffees.map(coffee => (
            <CoffeeCard 
              key={coffee.id}
              coffee={coffee}
            />
          ))}
        </div>
      </CoffeeCardsContainer>
    </HomeContainer>
  )
}