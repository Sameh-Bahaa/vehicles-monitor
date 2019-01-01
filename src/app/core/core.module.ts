import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutModule } from './layout/layout.module';
import { FirebaseModule } from './firebase/firebase.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    CoreRoutingModule,
    FirebaseModule
  ],
  exports:[
    LayoutModule,
    CoreRoutingModule,
    FirebaseModule
  ]
})
export class CoreModule { }
