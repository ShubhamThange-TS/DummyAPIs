import { Component } from '@angular/core';
import { AddProductService } from '../add-product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productName: string = '';
  productPrice: number = 0;
  selectedColor: string = '';
  selectedCategory: string = '';
  productDescription: string = '';
  colorOptions: string[] = ['Red', 'Blue', 'Green', 'Yellow'];
  categoryOptions: string[] = ['Electronics', 'Clothing', 'Books', 'Toys'];

  constructor(private addproductService: AddProductService) { }

  addProduct(): void {
    const newProduct = {
      name: this.productName,
      price: this.productPrice,
      color: this.selectedColor,
      category: this.selectedCategory,
      description: this.productDescription
    };

    this.addproductService.addProduct(newProduct);
    this.clearFields();
  }

  clearFields(): void {
    this.productName = '';
    this.productPrice = 0;
    this.selectedColor = '';
    this.selectedCategory = '';
    this.productDescription = '';
  }
}
