import { Component } from '@angular/core';
import { facebookIcon, twitterIcon } from 'src/app/common/assets/images/images-routes';
import { icons } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent {


  facebookIcon = icons.facebook

  twitterIcon = icons.twitter

  instagramIcon = icons.instagram

  whatsappIcon = icons.whatsapp

}
