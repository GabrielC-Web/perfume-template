import { Component, Input } from '@angular/core';
import { productAds, productImages } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent {

  @Input() products: any = []

  @Input() showPaginator: boolean = true

}
