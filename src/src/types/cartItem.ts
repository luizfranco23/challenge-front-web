import { Wine } from './IProducts';

export interface CartItem extends Wine {
 quantity: number;
}
