
import { Store } from '@ngrx/store';
import { BaseStateService } from '../../_super-classes/base-state-service';
import { Injectable } from '@angular/core';
import { State } from '../../state';
import { VehiclesActions } from './actions';
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';

@Injectable()
export class VehiclesStateService extends BaseStateService<State, vehicleDto, vehicleDto, vehicleDto> {

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
        if (!this.selectIsItemsLoaded())
            this.store.dispatch(this.actionService.createAddManyItemsAction(data))
    }
}
