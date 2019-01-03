import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'veh-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
