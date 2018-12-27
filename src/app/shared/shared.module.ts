import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from './material/material.module';
import { MenuItems } from './menu-items/menu-items';
import { GenerateFakeDataService } from './generate-fake-data/generate-fake-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule
  ],
  providers: [MenuItems, GenerateFakeDataService]
})
export class SharedModule { }
