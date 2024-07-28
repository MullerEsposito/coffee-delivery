type CoffeeTypes = "tradicional" | "com leite" | "gelado" | "especial";

export type Coffee = {
  id: string;
  tags: CoffeeTypes[];
  title: string;
  description: string;
  price: number;
  image: string;
}

export type CoffeeInCart = {
  id: string;
  quantity: number;
  price: number;
}