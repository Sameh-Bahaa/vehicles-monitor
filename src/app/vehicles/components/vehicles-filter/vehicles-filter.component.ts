import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable, pipe } from 'rxjs';
import { startWith, map, debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import { VehiclesStateService } from 'src/app/store/vehicles/all-vehicles/state-service';
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';
import { clientDTO } from 'src/app/shared/DTOs/client';
import { statusDTO } from 'src/app/shared/DTOs/status';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatAutocomplete, MatAutocompleteSelectedEvent, MatIcon } from '@angular/material';
 
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
  selectedClients: string[];
  statusList: statusDTO[];
  currentVIN: string = null;
  currentClient: number[] = [];
  currentStatus: number = null;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  @ViewChild('autoName') autoName: MatAutocomplete;
  @ViewChild('txtName') txtName: ElementRef<HTMLInputElement>;

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
    this.selectedClients = [];
    this.filterForm = this.fb.group({
      VIN: [],
      name: [[]],
      status: []
    });


    this.filteredClients = this.filterForm.controls["name"].valueChanges
      .pipe(
        debounceTime(300),
        map((value: string | null) =>
          (value) ? 
          this.clientsList.filter(v => 
            v.name.toLowerCase().includes(value) && 
            !this.selectedClients.includes(v.name)) : 
            
            this.clientsList.filter( v => !this.selectedClients.includes(v.name))
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

  onClientSelection(event: MatAutocompleteSelectedEvent) {
    this.currentClient.push(event.option.value as unknown as number);
    if ((event.option.viewValue || '').trim())
      this.selectedClients.push(event.option.viewValue);

    this.txtName.nativeElement.value = '';
    this.filterForm.controls["name"].setValue(null);
 
    this.filterAllParam();
  }

  filterAllParam() {
    this.service.dispatchFilter({ vin: this.currentVIN, status: this.currentStatus, client: this.currentClient })
  }

  add(event: MatChipInputEvent): void {
    // Add client only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.autoName.isOpen) {
      const input = event.input;
      const value = event.value;
      // Add our client
      if ((value || '').trim()) {
        this.selectedClients.push(value["name"]);
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.filterForm.controls["name"].setValue(null);
    }
  }

  remove(item: string): void {
    const index = this.selectedClients.indexOf(item);
    const index_current = this.currentClient.indexOf(this.clientsList.find( c => c.name == item).id)
    if (index >= 0) {
      this.selectedClients.splice(index, 1);
      this.currentClient.splice(index_current, 1);
      this.filterAllParam();
    }
  }
}
