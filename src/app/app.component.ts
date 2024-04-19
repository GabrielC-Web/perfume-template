import { Component } from '@angular/core';
import * as AOS from 'aos';
export const CC_PROJECT_INITIALS = 'f-template';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh)

    document.documentElement.style.setProperty('--v-dynamic-primary', '#000');
    document.documentElement.style.setProperty('--v-dynamic-secondary', '#000');
  }

}
