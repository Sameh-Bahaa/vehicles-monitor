import { TestBed } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';
import { VehiclesStateService } from 'src/app/store/vehicles/all-vehicles/state-service';
import { StoreModule, Store } from '@ngrx/store';
import { VehiclesActions } from 'src/app/store/vehicles/all-vehicles/actions';

describe('FirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [StoreModule.forRoot({})],
    providers: [FirebaseService, VehiclesStateService, Store, VehiclesActions]
  }));

  it('should be created', () => {
    const service: FirebaseService = TestBed.get(FirebaseService);
    expect(service).toBeTruthy();
  });
});
