import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ICartItem, ICartItems } from '../components/cart/cart.model';
import { IProduct } from '../components/products/product.model';
import { productsList } from './productsList';

const calculateCartTotal = (cartItems: ICartItems) =>
  Object.values(cartItems).reduce((acc, { total }) => acc + total, 0);

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  products: IProduct[] = [];
  cartItems: ICartItems = {};
  private myCart = new BehaviorSubject<ICartItem[]>([]);
  private cartTotal = new BehaviorSubject<number>(0);
  myCart$ = this.myCart.asObservable();
  cartTotal$ = this.cartTotal.asObservable();

  constructor() {
    this.products = productsList;
  }

  addToCart(product: IProduct) {
    const quantity = (this.cartItems[product.id]?.quantity ?? 0) + 1;
    const updatedProduct = {
      ...product,
      total: quantity * product.price,
      quantity,
    };

    this.cartItems[product.id] = updatedProduct;

    this.cartTotal.next(calculateCartTotal(this.cartItems));
    this.myCart.next(Object.values(this.cartItems));
  }
}
