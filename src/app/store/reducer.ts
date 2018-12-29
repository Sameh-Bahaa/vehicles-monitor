import {InjectionToken} from "@angular/core";
import { ActionReducerMap, combineReducers } from '@ngrx/store';

import { vehiclesReducers } from './vehicles/all-vehicles/reducer';
import { State } from './state';


export const reducerToken = new InjectionToken<ActionReducerMap<State>>('Reducers');

export function getReducers(): ActionReducerMap<State> {
  return {
    vehicles: vehiclesReducers
  };
}
