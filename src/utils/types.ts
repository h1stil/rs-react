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
  isError: null | Error;
  isLoaded: boolean;
  items: MyCard[];
};

export interface IFormCard {
  name: string;
  birthday: string;
  language: string;
  terms: boolean;
  sex: string;
  file: string;
}

export interface IFetch {
  products: MyCard[];
  total: number;
  skip: number;
  limit: number;
}
