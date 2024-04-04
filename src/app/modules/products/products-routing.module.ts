import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsLayoutComponent } from './pages/products-layout/products-layout.component';
import { ProductsOverviewComponent } from './pages/products-overview/products-overview.component';
import { ProductsDetailComponent } from './pages/products-detail/products-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsLayoutComponent
  },
  {
    path: 'overview',
    component: ProductsOverviewComponent
  },
  {
    path: 'detail',
    component: ProductsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
