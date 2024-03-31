import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app.routing.module';
import { CmmModule } from './common/common.module';
import { CmmAuthGuard } from './common/guards/auth.guard';
import { CmmHttpInterceptor } from './common/interceptors/http.interceptor';
import { CmmDataService } from './common/services/data.service';
import { CmmDialogService } from './common/services/dialogs.service';
import { CmmTimerSessionService } from './common/services/timer-session.service';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        CommonModule,
        CmmModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
    ],
    providers: [
        CmmDataService,
        CmmTimerSessionService,
        CmmDialogService,
        CmmAuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CmmHttpInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [],
})
export class AppModule { }
