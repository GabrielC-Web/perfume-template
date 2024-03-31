import { Component } from '@angular/core';
import { facebookIcon, twitterIcon } from 'src/app/common/assets/images/images-routes';
import { adds, carouselImages, homeImages, logos } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  /**
   * Imágenes de home
   */
  homeImages = homeImages

  /**
   * Productos
   */
  productItems: any[] = [
    {
      image: carouselImages.perfume1
    },
    {
      image: carouselImages.perfume2
    },
    {
      image: carouselImages.perfume3
    },
    {
      image: carouselImages.perfume4
    },
    {
      image: carouselImages.perfume5
    },
  ]

  /**
   * Logos
  */
  logos = [
    logos.dior,
    logos.paco_rabanne,
    logos.antonio_banderas
  ]

  /**
   * Publicidades
   */
  adds = [
    adds.ad1,
    adds.ad2,
    adds.ad3,
    adds.ad4,
  ]

  articleAdd = adds.ad5

}
