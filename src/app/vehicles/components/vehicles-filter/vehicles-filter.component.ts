import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable, pipe } from 'rxjs';
import { startWith, map, debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import { VehiclesStateService } from 'src/app/store/vehicles/all-vehicles/state-service';
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';

export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}

@Component({
  selector: 'veh-vehicles-filter',
  templateUrl: './vehicles-filter.component.html',
  styleUrls: ['./vehicles-filter.component.scss']
})
export class VehiclesFilterComponent implements OnInit {
  filteredVehicles: Observable<vehicleDto[]>;
  filterForm: FormGroup;

  constructor(private fb: FormBuilder, private service: VehiclesStateService) {
  }

  ngOnInit() {
    this.filterForm = this.fb.group({
      VIN: [],
      name: [],
      status: []
    });

    this.filteredVehicles = this.filterForm
      .valueChanges
      .pipe(
        debounceTime(300),
        switchMap(value =>
          this.filterStates(value)
        )
      )
  }

  filterStates(dto: any) {
    return this.service.selectItems().pipe(
      map(vehicles => vehicles.filter( v=> 
         ((v.vin) ? v.vin.toLowerCase().includes(dto.VIN) : true )
      ))
    );
  }

  filterGrid(vehDto: any) {
    //this.service.dispatchFilter({id: vehDto.id})
  }
}
