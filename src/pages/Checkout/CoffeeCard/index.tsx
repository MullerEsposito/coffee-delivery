import { HTMLAttributes } from "react";
import { InputNumber } from "../../../components/InputNumber";
import { ActionsContainer, CoffeeCardContainer, RemoveButton } from "./style";
import { Trash } from "@phosphor-icons/react";
import { useTheme } from "styled-components";

interface CoffeeCardProps {
  containerProps?: HTMLAttributes<HTMLDivElement>;
}

export function CoffeeCard({ containerProps }: CoffeeCardProps) {
  const theme = useTheme();

  return (
    <CoffeeCardContainer {...containerProps}>
      <img src="/assets/coffees/americano.png" style={{ gridArea: "img" }} />
      <p style={{ gridArea: "title"}}>Expresso Tradicional</p>
      <ActionsContainer style={{ gridArea: "controls" }}>
        <InputNumber min={0}/>
        <RemoveButton>
          <Trash size={16} fill={theme.colors.purple} />
          REMOVER
        </RemoveButton>
      </ActionsContainer>
      <span style={{ gridArea: "price"}}>R$ 9,90</span>
    </CoffeeCardContainer>
  )
}