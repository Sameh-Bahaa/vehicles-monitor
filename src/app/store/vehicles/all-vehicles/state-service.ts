
import { Store } from '@ngrx/store';
import { BaseStateService } from '../../_super-classes/base-state-service';
import { Injectable } from '@angular/core';
import { State } from '../../state';
import { VehiclesActions } from './actions';
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';
import { filterVehicleDto } from './state';

@Injectable()
export class VehiclesStateService extends BaseStateService<State, vehicleDto, vehicleDto, any> {

    constructor(
        protected store: Store<State>,
        protected actionService: VehiclesActions) {
        super(actionService, store, "vehicles")
    }

    dispatchLoad() {
        if (!this.selectIsItemsLoaded())
            super.dispatchLoad();
    }

    dispatcLoadInitial(data: any) {
        if (!this.selectIsItemsLoaded()) {
            this.store.dispatch(this.actionService.createAddManyItemsAction(data))
        }
        if (!this.selectIsAllItemsLoaded()) {
            this.store.dispatch(this.actionService.createAddAllItemsAction(data))
        }
    }

    dispatchUpdateSuccess(data: vehicleDto) {
        this.store.dispatch(this.actionService.createUpdateSuccessAction(data));
    }
}
