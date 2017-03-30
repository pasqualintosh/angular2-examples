import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  pageTitle: string = 'Catalogo';
  products: IProduct[];
  imageW : number = 50;
  imageH : number = 50;
  showImage : boolean = false;
  filter : string = '';

  constructor(private _productService: ProductService) {
     
  }

  toggleImage() : void {
    this.showImage = !this.showImage;
  }

  ngOnInit() : void {
    this.products = this._productService.getProducts();
  }

  onRatingClicked(message : string) : void {
    this.pageTitle = message;
  }

}
 