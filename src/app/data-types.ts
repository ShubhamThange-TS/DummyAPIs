export interface SignUp {
  Name: string;
  EmailAddress: string;
  MobileNumber: string;
  CreatePassword: string;
  Gender: string;
}
export interface Login {
  MobileNumber: string ;
}

export interface product {
  ProductTitle: string;
  ProductType: string;
  ProductPrice: number;
  ProductQuantity: number;
  ProductSpecification: string;
  ProductDescription: string;
  ProductVideoPath: string;
  ProductImagePath1: string;
  ProductImagePath2: string;
  ProductImagePath3: string;
  ProductImagePath4: string;
  ProductImagePath5: string;
  ProductDiscount: number;
  ProductID: number;
  ProductColor: string;
}
// export interface cart {
//   name: string,
//   price: number,
//   category: string,
//   color: string,
//   image: string,
//   description: string,
//   id: number | undefined,
//   quantity: undefined | number,
//   productId: number,
//   userId: number
// }

// export interface priceSummary {
//   price: number,
//   discount: number,
//   tax: number,
//   delivery: number,
//   total: number
// }

// export interface order {
//   email: string,
//   address: string,
//   contact: string,
//   totalPrice: number,
//   userId: string,
//   id: number | undefined
// }