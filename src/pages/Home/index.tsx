import coffeeDeliveryBanner from "../../assets/coffee-delivery-banner.png";
import { CoffeeCard } from "./CoffeeCard";
import { GridIconInfo } from "./GridIconInfo";
import { CoffeeCardsContainer, ContentBannerContainer, HomeContainer } from "./style";

export function Home() {
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

        <CoffeeCard />
      </CoffeeCardsContainer>
    </HomeContainer>
  )
}