import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';

@Component({
  selector: 'veh-vehicles-grid',
  templateUrl: './vehicles-grid.component.html',
  styleUrls: ['./vehicles-grid.component.scss']
})
export class VehiclesGridComponent {
  displayedColumns = ['vin', 'client', 'regNum', 'make', 'status'];
  dataSource: MatTableDataSource<vehicleDto>;
  @Output() isRealTime = new EventEmitter<boolean>();
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


  constructor(private snackBar: MatSnackBar) {
  }

  onChangeRealTime(isChecked: boolean) {
    this.isRealTime.emit(isChecked);
    this.snackBar.open('real-time updates', (isChecked) ? 'On' : 'Off', {
      duration: 2000,
      panelClass: [(isChecked) ? 'green-snackbar' : 'red-snackbar']
    });
  }
}