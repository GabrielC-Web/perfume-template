import { Component } from '@angular/core';
import { mainData } from 'src/app/modules/main/models/main.data';

@Component({
  selector: 'cmp-products-kart',
  templateUrl: './products-kart.component.html',
  styleUrls: ['./products-kart.component.scss']
})
export class ProductsKartComponent {

  /**
   * Productos en el carrito
   */
  products: any[] = mainData.productsModule.productsOverview.productsInkart

  /**
   * Prefactura
   */
  preBill: any = mainData.productsModule.productsOverview.preBill

}
