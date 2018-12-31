import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';
import { statusDTO } from 'src/app/shared/DTOs/status';
import { clientDTO } from 'src/app/shared/DTOs/client';

@Component({
  selector: 'veh-firebase-backend-simulator',
  templateUrl: './firebase-backend-simulator.component.html',
  styleUrls: ['./firebase-backend-simulator.component.scss']
})
export class FirebaseBackendSimulatorComponent implements OnInit {
  @Input() set isUpdateRandomVehicles(val: boolean) {
    if(val) {
      this.timer = setInterval(() => {
        console.log('timer started');
        this.updateRandomVehicleStatus()
      }, 500);
    } else {
      console.log('timer cleared');
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

  constructor(private fbService: FirebaseService) { 
  }

  ngOnInit() {
    this.getLookups();
  }

  getLookups() {
    this.fbService.getAllVehicles().then(v => {
      this.allVehicles = v;
    });

    this.fbService.getAllStatus().then(s => {
      this.allStatus = s;
    });

    this.fbService.getAllClients().then(c => {
      this.allClients = c;
    });
  }

  updateRandomVehicleStatus() {
    let randNumForVeh = Math.floor(Math.random() * ((Object.keys(this.allVehicles)).length - 2));
    let vehicleID = (this.allVehicles[randNumForVeh]) ? this.allVehicles[randNumForVeh].id : 1;

    let randNumForStatus = Math.floor(Math.random() * (this.allStatus.length - 1));
    let statusID = (this.allStatus[randNumForStatus]) ? this.allStatus[randNumForStatus].id : 1;

    this.fbService.updateVehicleStatus(vehicleID, statusID);
    console.log(vehicleID,statusID)
  }

  startListening(){
    this.fbService.turnOnNotification();
  }

  stopListening() {
    console.log('Listening Stopped!')
    this.fbService.turnOffNotification();
  }

}
