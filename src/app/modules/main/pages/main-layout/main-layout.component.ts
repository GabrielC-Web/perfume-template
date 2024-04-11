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

  constructor() { }

  ngAfterViewInit() {

    this.headerHeight = document.getElementById('header')?.offsetHeight as number

  }

  getMainData() {

  }

}
