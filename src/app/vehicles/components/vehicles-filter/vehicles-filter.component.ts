import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable, pipe } from 'rxjs';
import { startWith, map, debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import { VehiclesStateService } from 'src/app/store/vehicles/all-vehicles/state-service';
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';
import { clientDTO } from 'src/app/shared/DTOs/client';
import { statusDTO } from 'src/app/shared/DTOs/status';

export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}

@Component({
  selector: 'veh-vehicles-filter',
  templateUrl: './vehicles-filter.component.html',
  styleUrls: ['./vehicles-filter.component.scss']
})
export class VehiclesFilterComponent implements OnInit {
  filteredClients: Observable<any>;
  filterForm: FormGroup;
  clientsList: clientDTO[];
  statusList: statusDTO[];
  currentVIN: string = null;
  currentClient: number= null;
  currentStatus: number = null;

  @Input() set clients(clientSnapshot) {
    if (clientSnapshot) {
      this.clientsList = (clientSnapshot.val()[0]) ? clientSnapshot.val() : clientSnapshot.val().slice(1)
    }
  }
  @Input() set status(statusSnapshot) {
    if (statusSnapshot) {
      this.statusList = (statusSnapshot.val()[0]) ? statusSnapshot.val() : statusSnapshot.val().slice(1)
    }
  }

  constructor(private fb: FormBuilder, private service: VehiclesStateService) {
  }

  ngOnInit() {
    this.filterAllParam();

    this.filterForm = this.fb.group({
      VIN: [],
      name: [],
      status: []
    });


    this.filteredClients = this.filterForm.controls["name"].valueChanges
      .pipe(
        debounceTime(300),
        map(value =>
          this.clientsList.filter(v => v.name.toLowerCase().includes(value))
        )
      );
  }

  onVINChange(event: any) {
    this.currentVIN = event.target.value.toLowerCase();
    this.filterAllParam();
  }

  onStatusSelection(id: number) {
    this.currentStatus = id;
    this.filterAllParam();
  }

  onClientSelection(id: number) {
    this.currentClient = id;
    this.filterAllParam();
  }

  filterAllParam() {
    this.service.dispatchFilter({ vin: this.currentVIN , status: this.currentStatus, client: this.currentClient })
  }
}
