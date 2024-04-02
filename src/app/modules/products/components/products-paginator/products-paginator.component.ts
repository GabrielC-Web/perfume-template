import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-products-paginator',
  templateUrl: './products-paginator.component.html',
  styleUrls: ['./products-paginator.component.scss']
})
export class ProductsPaginatorComponent {

  @Input() posts: any = []

  slice = [1, 2, 3, 4, 5]

  currentPage = 0

  totalPages = 0

}
