import { Component } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  myCart$ = this.store.myCart$;
  cartTotal$ = this.store.cartTotal$;

  constructor(private store: StoreService) {}
}
