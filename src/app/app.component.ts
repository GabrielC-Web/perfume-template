import { Component } from '@angular/core';
export const CC_PROJECT_INITIALS = 'f-template';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  ngOnInit(): void {
    document.documentElement.style.setProperty('--v-dynamic-primary', '#000');
    document.documentElement.style.setProperty('--v-dynamic-secundary', '#000');
  }

}
