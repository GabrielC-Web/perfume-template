import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { CmmModule } from 'src/app/common/common.module';
import { MainHeaderComponent } from './components/main-header/main-header.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    MainHeaderComponent
  ],
  imports: [
    CommonModule,
    CmmModule,
    MainRoutingModule
  ]
})
export class MainModule { }
