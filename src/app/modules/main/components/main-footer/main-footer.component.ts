import { Component } from '@angular/core';
import { facebookIcon, twitterIcon } from 'src/app/common/assets/images/images-routes';

@Component({
  selector: 'cmp-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent {


  facebookIcon = facebookIcon

  twitterIcon = twitterIcon

}
