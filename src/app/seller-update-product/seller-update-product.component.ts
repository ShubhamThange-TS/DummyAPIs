import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-types';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  productData: undefined | product;
  productMessage: undefined | string;
  constructor(private route: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    console.warn(productId);
    productId && this.product.getProduct(productId).subscribe((data) => {
      console.warn(data);
      this.productData = data;
    });
  }

  submit(data: product) {
    console.warn(data);
    this.product.updateProduct(data).subscribe((result: any) => {
      if (result) {
        this.productMessage = "Product Updated Successfully !"
      }
    });
    setTimeout(() => {
      this.productMessage = undefined
    }, 3000);
  }
}
