import { Component } from '@angular/core';
import { mainData } from 'src/app/modules/main/models/main.data';
import { productAds, homeImages } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-products-layout',
  templateUrl: './products-layout.component.html',
  styleUrls: ['./products-layout.component.scss']
})
export class ProductsLayoutComponent {

  /**
   * Data cableada
   */
  templateData = mainData

}
