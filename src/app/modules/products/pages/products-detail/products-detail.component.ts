import { Component } from '@angular/core';
import { mainData } from 'src/app/modules/main/models/main.data';

@Component({
  selector: 'pag-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent {

  images: string[] = mainData.productsModule.productDetail.images

  productInfo = mainData.productsModule.productDetail.productInfo

  aditionalProducts = mainData.productsModule.products.items.slice(0, 3)

}
