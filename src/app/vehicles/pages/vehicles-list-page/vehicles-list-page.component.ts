import { Component, OnInit, OnDestroy } from '@angular/core';
import { VehiclesStateService } from 'src/app/store/vehicles/all-vehicles/state-service';
import { Observable, of } from 'rxjs';
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';
import { statusDTO } from 'src/app/shared/DTOs/status';
import { clientDTO } from 'src/app/shared/DTOs/client';

@Component({
  selector: 'veh-vehicles-list-page',
  templateUrl: './vehicles-list-page.component.html',
  styleUrls: ['./vehicles-list-page.component.scss']
})
export class VehiclesListPageComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    
  }
  vehicles$: Observable<vehicleDto[]>;
  clients$: Observable<any>;
  status$: Observable<any>;

  isUpdateRandomVehicles$: Observable<boolean>;
  isStartListening$:  Observable<boolean>;
  toggleEnable: boolean;

  constructor(private service: VehiclesStateService, private fbService: FirebaseService) {
    this.vehicles$ = this.service.selectItems();
    this.clients$ = this.fbService.getAllClients();
    this.status$ = this.fbService.getAllStatus();
    this.toggleEnable = false;
  }

  ngOnInit() {
  }

  onLoadVehicles() {
    this.service.dispatchAdd(null);

  }
}
