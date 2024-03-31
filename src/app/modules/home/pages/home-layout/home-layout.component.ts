import { Component } from '@angular/core';
import { adds, carouselImages, homeImages, logos } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {

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
   * Producto seleccionado
   */
  productSelected: any

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


  /**
   * Funcion para seleccionar el siguiente elemento del carrucel
   */
  nextElement() {
    // selecciono el ultimo elemento de mi arreglo de imagenes
    const last: number = this.productItems.length - 1;

    // selecciono la imagen que corresponde
    const nextImg = ++this.productSelected;
    if (nextImg > last) {
      this.selectTemplate(0);
    }
    else {
      this.selectTemplate(nextImg);
    }
  }

  /**
   * Funcion para seleccionar el anterior elemento del carrucel
   */
  prevElement() {
    // selecciono el ultimo elemento de mi arreglo de imagenes
    const last: number = this.productItems.length - 1;

    // selecciono la imagen que corresponde
    const nextImg = this.productSelected - 1;
    if (nextImg < 0) {
      this.selectTemplate(last);
    }
    else {
      this.selectTemplate(nextImg);
    }
  }

  /**
   * Funcion que selescciona el Templateo que se muestra en detalle segun la imagen que se seleccione
   * @param idImg
   */
  selectTemplate(idImg: number) {

    // Guardo el id de la imagen seleccionada
    this.productSelected = idImg;

  }

}
