import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';
import { clientDTO } from 'src/app/shared/DTOs/client';
import { statusDTO } from 'src/app/shared/DTOs/status';

@Component({
  selector: 'veh-vehicles-grid',
  templateUrl: './vehicles-grid.component.html',
  styleUrls: ['./vehicles-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehiclesGridComponent implements OnChanges {
  private displayedColumns = ['vin', 'status', 'client', 'regNum', 'make'];
  private dataSource: MatTableDataSource<vehicleDto>;
  private realTimeClass: string;
  @Output() isRealTime = new EventEmitter<boolean>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  _clients: clientDTO[];
  _status: statusDTO[];
  @Input() set clients(data: any) {
    if (data)
      this._clients = data.val().slice(1);
  }
  @Input() set status(data: firebase.database.DataSnapshot) {
    if (data)
      this._status = data.val().slice(1);
  }
  @Input() items: vehicleDto[];

  ngOnChanges(changes: SimpleChanges) {
    if (this._clients && this._status && this.items) {
      let result = this.items.map(v => this.mapper(v));
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.data = result;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  mapper(item: vehicleDto) {
    let clientFiltered = this._clients.find(c => c.id == item.client);
    let statusFiltered = this._status.find(s => s.id == item.status);

    return {
      ...item,
      clientName: (clientFiltered) ? clientFiltered.name : item.client,
      statusName: (statusFiltered) ? statusFiltered.status : item.status,
      statusColor: (statusFiltered) ? statusFiltered.color : 'black'
    };
  }
  constructor(private snackBar: MatSnackBar) {
  }

  onChangeRealTime(isChecked: boolean) {
    this.isRealTime.emit(isChecked);
    this.realTimeClass = (isChecked) ? 'real-time-green' : 'real-time-red';
    this.snackBar.open('real-time updates', (isChecked) ? 'On' : 'Off', {
      duration: 2000,
      panelClass: [(isChecked) ? 'green-snackbar' : 'red-snackbar']
    });
  }
}