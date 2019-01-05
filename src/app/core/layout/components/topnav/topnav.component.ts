import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'veh-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent {
  
  constructor(private translate: TranslateService) { }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
  
}
