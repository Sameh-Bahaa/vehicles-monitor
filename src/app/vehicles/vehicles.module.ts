import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesListPageComponent } from './pages/vehicles-list-page/vehicles-list-page.component';
import { VehiclesGridComponent } from './components/vehicles-grid/vehicles-grid.component';
import { SharedModule } from '../shared/shared.module';
import { VehiclesFilterComponent } from './components/vehicles-filter/vehicles-filter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [VehiclesListPageComponent, VehiclesGridComponent, VehiclesFilterComponent],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MatSnackBarModule
  ],
  providers: [MatSnackBar]
})
export class VehiclesModule { }
