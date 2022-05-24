import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { IProduct } from './product.model';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private store: StoreService) {}

  ngOnInit(): void {
    this.products = this.store.products;
  }

  addToCart(product: IProduct) {
    this.store.addToCart(product);
  }
}
