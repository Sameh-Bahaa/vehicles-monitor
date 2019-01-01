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
  displayedColumns = ['vin', 'client', 'regNum', 'make', 'status'];
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


  onloadVehiclesClick() {
    this.loadVehicles.emit();
  }
}