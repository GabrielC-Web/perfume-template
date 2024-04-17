import { Component } from '@angular/core';

@Component({
  selector: 'pag-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  /**
   * Altura del header
   */
  headerHeight: number = 0

  footerHeight: number = 0

  constructor() { }

  ngOnInit() {

    this.headerHeight = document.getElementById('header')?.offsetHeight as number

    this.footerHeight = document.getElementById('footer')?.offsetHeight as number

  }

  getMainData() {

  }

}
