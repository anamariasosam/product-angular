import { IProduct } from '../products/product.model';

export interface ICartItem extends IProduct {
  quantity: number;
  total: number;
}

export interface ICartItems {
  [key: string]: ICartItem;
}
