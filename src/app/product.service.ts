import { Injectable } from '@angular/core';
import { IProduct } from './pages/product-list/product';

@Injectable()
export class ProductService {

  getProducts(): IProduct[] {
    return [
      {
        "productId": 1,
        "productName": "Motocicletta",
        "productCode": "aa0b5",
        "description": "500 cavalli motore",
        "price": 3200.00,
        "starRating": 2,
        "imageUrl": "http://www.it.all.biz/img/it/catalog/87554.jpeg"
      },
      {
        "productId": 2,
        "productName": "Harley Quinn",
        "productCode": "ab2c8",
        "description": "ultima edizione",
        "price": 6000.00,
        "starRating": 5.0,
        "imageUrl": "http://blog.emp-online.it/wp-content/uploads/2016/03/suicide-squad-margot-robbie-harley-quinn.png"
      }
    ];
  }

}
