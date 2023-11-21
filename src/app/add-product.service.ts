import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  private products: any[] = [];
  constructor() { }
  getProducts(): any[] {
    return this.products;
  }

  addProduct(product: any): void {
    this.products.push(product);
  }
}
