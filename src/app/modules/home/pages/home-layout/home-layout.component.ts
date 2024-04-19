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

  @HostListener('window:resize', ['$event'])
  onResize(e: Event) {

    //* Veo si la pantalla es lo suficientemente pequeña
    if (window.innerWidth <= 992) {
      this.changeListMode()
    } else {
      this.productItems = []
    }

  }

  constructor() {

  }

  ngOnInit() {

    //* Veo si la pantalla es lo suficientemente pequeña
    if (window.innerWidth <= 992) {
      this.changeListMode()
    } else {
      this.productItems = []
    }

  }

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

  /**
   * Genera una lista con todos los items del listado con secciones de items
   */
  changeListMode() {

    //* Vacío el listado
    this.productItems = [
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

}
