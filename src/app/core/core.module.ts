import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmmModule } from 'src/app/common/common.module';
import { CoreButtonComponent } from './components/core-button/core-button.component';


@NgModule({
    declarations: [
        CoreButtonComponent
    ],
    imports: [
        CommonModule,
        CmmModule,
    ],
    exports: [
        CoreButtonComponent
    ]
})
export class CoreModule { }
