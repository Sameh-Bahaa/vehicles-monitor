import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { clientDTO } from 'src/app/shared/DTOs/client';
import { statusDTO } from 'src/app/shared/DTOs/status';
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';
import { of } from 'rxjs';
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

  getAllClients(): Promise<clientDTO[]> {
    return this.db.ref('clients').once('value').then(
      (snapshot) => {
        return snapshot.val();
      }
    )
  }

  getAllStatus(): Promise<statusDTO[]> {
    return this.db.ref('status').once('value').then(
      (snapshot) => {
        return snapshot.val();
      }
    )
  }

  getAllVehicles(): Promise<vehicleDto[]> {
    return this.db.ref('vehicles').once('value').then(
      (snapshot) => {
        let vehicles: vehicleDto[] = snapshot.val();
        vehicles = (vehicles[0]) ? vehicles :vehicles.slice(1);
        
        this.stateService.dispatcLoadInitial(vehicles);
        return snapshot.val()
      }
    )
  }

  updateVehicleStatus(vehicleID: number, status: number) {
    console.log('veh:', vehicleID, ' statusid:', status)
    this.db.ref('vehicles/' + vehicleID).update({ status: status }, function (error) {
      if (error) {
        console.error(error)
      } else {
        console.info('success')
      }
    });
  }

  turnOnNotification() {
    this.db.ref('vehicles').on('child_changed', snapshot => {
      let updates: vehicleDto = snapshot.val();
      console.log('updates recieved:', updates);
      this.stateService.dispatchUpdateSuccess(updates);
    });
  }

  turnOffNotification() {
    this.db.ref('vehicles').off('child_changed');
  }
}
