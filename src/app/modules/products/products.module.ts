import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsLayoutComponent } from './pages/products-layout/products-layout.component';
import { CoreModule } from 'src/app/core/core.module';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { ProductsPaginatorComponent } from './components/products-paginator/products-paginator.component';
import { CmmModule } from 'src/app/common/common.module';


@NgModule({
  declarations: [
    ProductsLayoutComponent,
    ProductsGridComponent,
    ProductsPaginatorComponent
  ],
  imports: [
    CommonModule,
    CmmModule,
    CoreModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
