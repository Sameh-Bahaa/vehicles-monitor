import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesListPageComponent } from './pages/vehicles-list-page/vehicles-list-page.component';
import { VehiclesGridComponent } from './components/vehicles-grid/vehicles-grid.component';
import { MaterialModule } from '../shared/material/material.module';
import { VehiclesFilterComponent } from './components/vehicles-filter/vehicles-filter.component';

@NgModule({
  declarations: [VehiclesListPageComponent, VehiclesGridComponent, VehiclesFilterComponent],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    MaterialModule
  ]
})
export class VehiclesModule { }
