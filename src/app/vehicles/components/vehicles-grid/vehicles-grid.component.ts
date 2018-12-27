import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { GenerateFakeDataService, VehicleDto } from 'src/app/shared/generate-fake-data/generate-fake-data.service';

@Component({
  selector: 'veh-vehicles-grid',
  templateUrl: './vehicles-grid.component.html',
  styleUrls: ['./vehicles-grid.component.scss']
})
export class VehiclesGridComponent implements OnInit {
  displayedColumns = ['vin', 'name', 'address', 'regNum', 'status'];
  dataSource: MatTableDataSource<VehicleDto>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(faker: GenerateFakeDataService) {
    var myData = faker.getRandomVehiclesData();
    this.dataSource = new MatTableDataSource(myData);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string, column: string) {
  
    if (column == 'status') {
      this.dataSource.filterPredicate =
      (data: VehicleDto, filter: string) => { console.log(data, data[column]); return data[column] == filter};
    } else {
      this.dataSource.filterPredicate =
      (data: VehicleDto, filter: string) => { console.log(data, data[column]);return data[column].indexOf(filter) != -1};
    }
    

    filterValue = filterValue.trim(); // Remove whitespace
    //filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}