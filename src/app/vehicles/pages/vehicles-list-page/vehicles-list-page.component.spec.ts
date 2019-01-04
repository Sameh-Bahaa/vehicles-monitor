import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesListPageComponent } from './vehicles-list-page.component';
import { FirebaseBackendSimulatorComponent } from 'src/app/core/firebase/firebase-backend-simulator/firebase-backend-simulator.component';
import { VehiclesFilterComponent } from '../../components/vehicles-filter/vehicles-filter.component';
import { VehiclesGridComponent } from '../../components/vehicles-grid/vehicles-grid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { StoreModule, Store } from '@ngrx/store';
import { VehiclesStateService } from 'src/app/store/vehicles/all-vehicles/state-service';
import { VehiclesActions } from 'src/app/store/vehicles/all-vehicles/actions';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';
import { MatSnackBar } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('VehiclesListPageComponent', () => {
  let component: VehiclesListPageComponent;
  let fixture: ComponentFixture<VehiclesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, TranslateModule.forRoot(), MaterialModule,  StoreModule.forRoot({}), BrowserAnimationsModule],
      declarations: [ VehiclesListPageComponent, FirebaseBackendSimulatorComponent, VehiclesFilterComponent, VehiclesGridComponent ],
      providers: [VehiclesStateService, Store, VehiclesActions, FirebaseService, MatSnackBar]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
