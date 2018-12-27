import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutPageComponent } from '../core/layout/pages/layout-page/layout-page.component';
import { VehiclesListPageComponent } from './pages/vehicles-list-page/vehicles-list-page.component';

const routes: Routes = [
  {
    path: 'vehicles',
    component: LayoutPageComponent,
    children: [
      {
        path: '',
        component: VehiclesListPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
