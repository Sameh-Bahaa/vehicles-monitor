import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Observable } from 'rxjs';
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';

@Component({
  selector: 'veh-vehicles-grid',
  templateUrl: './vehicles-grid.component.html',
  styleUrls: ['./vehicles-grid.component.scss']
})
export class VehiclesGridComponent implements OnInit {
  displayedColumns = ['vin', 'client', 'regNum', 'status', 'make'];
  dataSource: MatTableDataSource<vehicleDto>;
  @Output() loadVehicles = new EventEmitter<void>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() set items(val: vehicleDto[]) {
    if (val) {
      this.dataSource = new MatTableDataSource(val);
      this.dataSource.data = val;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }


  constructor() {
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string, column: string) {

    // if (column == 'status') {
    //   this.dataSource.filterPredicate =
    //     (data: vehicleDto, filter: string) => { return data[column] };
    // } else {
    //   this.dataSource.filterPredicate =
    //     (data: vehicleDto, filter: string) => { return data[column].indexOf(filter) != -1 };
    // }


    filterValue = filterValue.trim(); // Remove whitespace
    //filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onloadVehiclesClick() {
    this.loadVehicles.emit();
  }
}