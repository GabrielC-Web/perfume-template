import { Component, HostListener } from '@angular/core';
import { mainData } from 'src/app/modules/main/models/main.data';
import { productAds, carouselImages, homeImages, logos } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {


  /**
   * Data cableada
   */
  templateData = mainData

  /**
   * Imágenes de home
   */
  homeImages = homeImages

  logos = logos

  /**
   * Productos
   */
  productItems = [
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

}
