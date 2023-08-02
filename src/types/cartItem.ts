import { Wine } from './IProducts';

export interface CartItem extends Wine {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}
