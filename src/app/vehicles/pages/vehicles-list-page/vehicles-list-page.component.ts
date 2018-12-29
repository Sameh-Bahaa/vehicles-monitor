import { Component, OnInit } from '@angular/core';
import { VehiclesStateService } from 'src/app/store/vehicles/all-vehicles/state-service';
import { VehicleDto } from 'src/app/shared/generate-fake-data/generate-fake-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'veh-vehicles-list-page',
  templateUrl: './vehicles-list-page.component.html',
  styleUrls: ['./vehicles-list-page.component.scss']
})
export class VehiclesListPageComponent implements OnInit {
  vehicles$: Observable<VehicleDto[]>;
  constructor(private service: VehiclesStateService) {
    this.service.dispatchLoad();
    this.vehicles$ = this.service.selectItems();
  }

  ngOnInit() {
  }

  onLoadVehicles() {
    this.service.dispatchAdd(null);

  }
}
