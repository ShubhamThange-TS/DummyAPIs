import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-types';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  [x: string]: any;

  constructor(private http: HttpClient) { }
  addProduct(data: product) {
    return this.http.post('http://192.168.0.121/ProductService/Service1.svc/ProductDetails', data);
  }
  productList() {
    return this.http.get<product[]>('http://192.168.0.121/ProductService/Service1.svc/GetAllProduct');
  }
  deleteProduct(ProductID: number) {
    return this.http.delete(`http://192.168.0.121/ProductService/Service1.svc/ProductDetails/${ProductID}`);
  }
  getProduct(ProductID: string) {
    return this.http.get<product>(`http://192.168.0.121/ProductService/Service1.svc/GetAllProduct/${ProductID}`);
  }
  updateProduct(data: any): Observable<any> {
    return this.http.put<product>('http://192.168.0.121/ProductService/Service1.svc/ProductDetails', data);
  }
}
  