export type MyCard = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [string];
};

export type MyState = {
  error: null | Error;
  isLoaded: boolean;
  items: MyCard[];
};

export interface IFormCard {
  name: string;
  date: string;
  select: string;
  checkbox: boolean;
  switcher: string;
  file: string;
}
