import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule, INITIAL_STATE, _INITIAL_STATE } from '@ngrx/store';
import { getInitialState, State } from './state';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { VehiclesEffectsService } from './vehicles/all-vehicles/effects';
import { VehiclesActions } from './vehicles/all-vehicles/actions';
import { VehiclesStateService } from './vehicles/all-vehicles/state-service';
import { getReducers } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(getReducers(), { initialState: <any>getInitialState }),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 20 }) : [],
    EffectsModule.forRoot([
      VehiclesEffectsService
    ])

  ],
  providers: [
    VehiclesActions,
    VehiclesStateService,
  ]
})
export class VehiclesStoreModule {
  constructor(store: Store<State>) {
    store.subscribe(state => {
      window.localStorage.setItem('$$Vehicles-Monitor$$', JSON.stringify(state));
    });
  }
 }
