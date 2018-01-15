import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsService } from './products.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductsComponent, ProductDetailComponent],
  exports: [ProductsComponent],
  providers: [ProductsService]
})
export class ProductsModule { }
