import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutModule } from './layout/layout.module';
import { FirebaseBackendSimulatorComponent } from './firebase/firebase-backend-simulator/firebase-backend-simulator.component';
import { FirebaseService } from './firebase/firebase.service';

@NgModule({
  declarations: [FirebaseBackendSimulatorComponent],
  imports: [
    CommonModule,
    LayoutModule,
    CoreRoutingModule
  ],
  exports:[
    LayoutModule,
    CoreRoutingModule,
    FirebaseBackendSimulatorComponent
  ],
  providers: [FirebaseService]
})
export class CoreModule { }
