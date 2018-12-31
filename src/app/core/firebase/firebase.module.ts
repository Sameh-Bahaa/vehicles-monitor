import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseService } from './firebase.service';
import { FirebaseBackendSimulatorComponent } from './firebase-backend-simulator/firebase-backend-simulator.component';


@NgModule({
  declarations: [FirebaseBackendSimulatorComponent],
  imports: [
    CommonModule
  ],
  providers: [
    FirebaseService
  ],
  exports: [FirebaseBackendSimulatorComponent]
})
export class FirebaseModule { }
