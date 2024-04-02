import { Component } from '@angular/core';
import { adds, homeImages } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-products-layout',
  templateUrl: './products-layout.component.html',
  styleUrls: ['./products-layout.component.scss']
})
export class ProductsLayoutComponent {

  adds = adds

  otherImages = homeImages

}
