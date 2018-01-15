import { ProductsService } from './products.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  nomeEstabelecimento: string;
  products: string[];
  picture = 'http://lorempixel.com/400/200/nature/2/';

  constructor(private productsService: ProductsService) {
    this.nomeEstabelecimento = 'Super baratão';
    this.products = this.productsService.getProducts();
  }


  ngOnInit() {
  }

}
