import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'starter', type: 'link', name: 'Dashboard', icon: 'av_timer' },
  { state: 'button', type: 'link', name: 'Vehicles List', icon: 'local_car_wash' }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
