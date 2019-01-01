import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';
import { statusDTO } from 'src/app/shared/DTOs/status';
import { clientDTO } from 'src/app/shared/DTOs/client';
import { Observable } from 'rxjs';
import { VehiclesStateService } from 'src/app/store/vehicles/all-vehicles/state-service';

@Component({
  selector: 'veh-firebase-backend-simulator',
  templateUrl: './firebase-backend-simulator.component.html',
  styleUrls: ['./firebase-backend-simulator.component.scss']
})
export class FirebaseBackendSimulatorComponent implements OnInit {
  @Input() set isUpdateRandomVehicles(val: boolean) {
    if(val) {
      this.timer = setInterval(() => {
        this.updateRandomVehicleStatus()
      }, 500);
    } else {
      clearInterval(this.timer);
    }
  }

  @Input() set isStartListening(val: boolean) {
    if (val) {
      this.startListening();
    } else {
      this.stopListening();
    }
  }
  private timer;
  private allVehicles: vehicleDto[];
  private allStatus: statusDTO[];
  private allClients: clientDTO[];

  constructor(private fbService: FirebaseService, private stateService: VehiclesStateService) { 
  }

  ngOnInit() {
    this.getLookups();
  }

  getLookups() {
    this.fbService.getAllVehicles().subscribe(v => {
      this.allVehicles = (v.val()[0]) ? v.val(): v.val().slice(1);
      this.stateService.dispatcLoadInitial(this.allVehicles);
    });

    this.fbService.getAllStatus().subscribe(s => {
      this.allStatus = s.val();
    });

  }

  updateRandomVehicleStatus() {
    let randNumForVeh = Math.floor(Math.random() * ((Object.keys(this.allVehicles)).length - 2));
    let vehicleID = (this.allVehicles[randNumForVeh]) ? this.allVehicles[randNumForVeh].id : 1;

    let randNumForStatus = Math.floor(Math.random() * (this.allStatus.length - 1));
    let statusID = (this.allStatus[randNumForStatus]) ? this.allStatus[randNumForStatus].id : 1;

    this.fbService.updateVehicleStatus(vehicleID, statusID);
  }

  startListening(){
    this.fbService.turnOnNotification();
  }

  stopListening() {
    this.fbService.turnOffNotification();
  }

}
