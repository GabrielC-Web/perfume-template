import { Component } from '@angular/core';
import { mainData } from 'src/app/modules/main/models/main.data';

@Component({
  selector: 'pag-products-overview',
  templateUrl: './products-overview.component.html',
  styleUrls: ['./products-overview.component.scss']
})
export class ProductsOverviewComponent {

  /**
   * Productos en el carrito
   */
  products: any[] = mainData.productsModule.productsOverview.productsInkart

  /**
   * Prefactura
   */
  preBill: any = mainData.productsModule.productsOverview.preBill

}
