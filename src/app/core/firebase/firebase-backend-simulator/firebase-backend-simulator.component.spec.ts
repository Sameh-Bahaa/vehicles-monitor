import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseBackendSimulatorComponent } from './firebase-backend-simulator.component';
import { FirebaseService } from '../firebase.service';
import { VehiclesStateService } from 'src/app/store/vehicles/all-vehicles/state-service';
import { Store, StoreModule } from '@ngrx/store';
import { VehiclesActions } from 'src/app/store/vehicles/all-vehicles/actions';

describe('FirebaseBackendSimulatorComponent', () => {
  let component: FirebaseBackendSimulatorComponent;
  let fixture: ComponentFixture<FirebaseBackendSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [ FirebaseBackendSimulatorComponent ],
      providers: [FirebaseService, VehiclesStateService, Store, VehiclesActions]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseBackendSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
