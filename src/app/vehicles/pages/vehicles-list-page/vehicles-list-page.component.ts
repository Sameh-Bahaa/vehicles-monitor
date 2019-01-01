import { Component, OnInit, OnDestroy } from '@angular/core';
import { VehiclesStateService } from 'src/app/store/vehicles/all-vehicles/state-service';
import { Observable, of } from 'rxjs';
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';

@Component({
  selector: 'veh-vehicles-list-page',
  templateUrl: './vehicles-list-page.component.html',
  styleUrls: ['./vehicles-list-page.component.scss']
})
export class VehiclesListPageComponent implements OnInit, OnDestroy {
  vehicles$: Observable<vehicleDto[]>;
  clients$: Observable<any>;
  status$: Observable<any>;

  isUpdateRandomVehicles$: Observable<boolean>;
  isStartListening$:  Observable<boolean>;

  constructor(private service: VehiclesStateService, private fbService: FirebaseService) {
    this.vehicles$ = this.service.selectItems();
    this.clients$ = this.fbService.getAllClients();
    this.status$ = this.fbService.getAllStatus();
  }

  ngOnInit() {
  }

  onIsRealTimeChanged(isRealTime: boolean) {
    this.isStartListening$ = of(isRealTime);
    this.isUpdateRandomVehicles$ = of(isRealTime);
  }

  ngOnDestroy(): void {
    this.isStartListening$ = of(false);
    this.isUpdateRandomVehicles$ = of(false);
    
  }
}
