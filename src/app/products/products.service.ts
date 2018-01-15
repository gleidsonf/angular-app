import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts() {
    return ['Caneta', 'Goiaba', 'Biscoito', 'Chocolate'];
  }
}
