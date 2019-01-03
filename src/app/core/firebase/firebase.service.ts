import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { clientDTO } from 'src/app/shared/DTOs/client';
import { statusDTO } from 'src/app/shared/DTOs/status';
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';
import { of, from, Observable } from 'rxjs';
import { VehiclesStateService } from 'src/app/store/vehicles/all-vehicles/state-service';


@Injectable()
export class FirebaseService {
  private db: firebase.database.Database;

  constructor(private stateService: VehiclesStateService) {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBT33oTNXihG0MU78PMUuFxR6KxijyDYRs",
      authDomain: "vehicles-monitor.firebaseapp.com",
      databaseURL: "https://vehicles-monitor.firebaseio.com",
      projectId: "vehicles-monitor",
      storageBucket: "vehicles-monitor.appspot.com",
      messagingSenderId: "992146194138"
    };
    firebase.initializeApp(config);

    this.db = firebase.database();
  }

  getAllClients(): Observable<firebase.database.DataSnapshot> {
    return from(this.db.ref('clients').once('value'));
  }

  getAllStatus(): Observable<firebase.database.DataSnapshot> {
    return from(this.db.ref('status').once('value'));
  }

  getAllVehicles(): Observable<firebase.database.DataSnapshot> {
    return from(this.db.ref('vehicles').once('value'));
  }

  updateVehicleStatus(vehicleID: number, status: number) {
    this.db.ref('vehicles/' + vehicleID).update({ status: status }, function (error) {
      if (error) {
        console.error(error)
      } 
    });
  }

  turnOnNotification() {
    this.db.ref('vehicles').on('child_changed', snapshot => {
      let updates: vehicleDto = snapshot.val();
      this.stateService.dispatchUpdateSuccess(updates);
    });
  }

  turnOffNotification() {
    this.db.ref('vehicles').off('child_changed');
  }
}
