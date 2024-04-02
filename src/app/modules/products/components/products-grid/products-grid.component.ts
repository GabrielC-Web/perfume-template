import { Component } from '@angular/core';
import { adds, productImages } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent {

  posts: any = [
    {
      img: productImages.product1,
      productName: 'OLYMPEA',
      brandName: 'PACO RABANNE'
    },
    {
      img: productImages.product2,
      productName: 'OLYMPEA',
      brandName: 'PACO RABANNE'
    },
    {
      img: productImages.product3,
      productName: 'OLYMPEA',
      brandName: 'PACO RABANNE'
    },
    {
      img: productImages.product4,
      productName: 'OLYMPEA',
      brandName: 'PACO RABANNE'
    },
    {
      img: productImages.product5,
      productName: 'OLYMPEA',
      brandName: 'PACO RABANNE'
    },
    {
      img: productImages.product6,
      productName: 'OLYMPEA',
      brandName: 'PACO RABANNE'
    },
    {
      img: productImages.product7,
      productName: 'OLYMPEA',
      brandName: 'PACO RABANNE'
    },
    {
      img: productImages.product8,
      productName: 'OLYMPEA',
      brandName: 'PACO RABANNE'
    },
    {
      img: productImages.product9,
      productName: 'OLYMPEA',
      brandName: 'PACO RABANNE'
    },
    {
      img: productImages.product10,
      productName: 'OLYMPEA',
      brandName: 'PACO RABANNE'
    },
    {
      img: productImages.product1,
      productName: 'OLYMPEA',
      brandName: 'PACO RABANNE'
    },
    {
      img: productImages.product8,
      productName: 'OLYMPEA',
      brandName: 'PACO RABANNE'
    },
  ]

}
