export interface ProductRating {
  rate: number;
  count: number;
}

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
	rating?: ProductRating;
	stock?:string
}