import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { GenerateFakeDataService, VehicleDto } from 'src/app/shared/generate-fake-data/generate-fake-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'veh-vehicles-grid',
  templateUrl: './vehicles-grid.component.html',
  styleUrls: ['./vehicles-grid.component.scss']
})
export class VehiclesGridComponent implements OnInit {
  displayedColumns = ['vin', 'client', 'make', 'regNum', 'status'];
  dataSource: MatTableDataSource<VehicleDto>;
  @Output() loadVehicles = new EventEmitter<void>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() set items(val: VehicleDto[]) {
    if (val) {
      this.dataSource = new MatTableDataSource(val);
      this.dataSource.data = val;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }


  constructor(faker: GenerateFakeDataService) {
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string, column: string) {

    if (column == 'status') {
      this.dataSource.filterPredicate =
        (data: VehicleDto, filter: string) => { return data[column] };
    } else {
      this.dataSource.filterPredicate =
        (data: VehicleDto, filter: string) => { return data[column].indexOf(filter) != -1 };
    }


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