import { Component, OnInit, OnDestroy } from '@angular/core';
import { VehiclesStateService } from 'src/app/store/vehicles/all-vehicles/state-service';
import { Observable, of } from 'rxjs';
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';

@Component({
  selector: 'veh-vehicles-list-page',
  templateUrl: './vehicles-list-page.component.html',
  styleUrls: ['./vehicles-list-page.component.scss']
})
export class VehiclesListPageComponent implements OnInit, OnDestroy {
  vehicles$: Observable<vehicleDto[]>;
  isUpdateRandomVehicles$: Observable<boolean>;
  isStartListening$:  Observable<boolean>;
  toggleEnable: boolean;

  constructor(private service: VehiclesStateService) {
    this.vehicles$ = this.service.selectItems();
    this.toggleEnable = false;
  }

  ngOnInit() {
  }

  onLoadVehicles() {
    this.toggleEnable = !this.toggleEnable;
    console.log(` toggle ${this.toggleEnable}`);
    this.isStartListening$ = of(this.toggleEnable);
    this.isUpdateRandomVehicles$ = of(this.toggleEnable);
  }

  ngOnDestroy(): void {
    this.isStartListening$ = of(false);
    this.isUpdateRandomVehicles$ = of(false);
    
  }
}
