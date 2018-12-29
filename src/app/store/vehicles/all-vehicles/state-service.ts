
import { Store } from '@ngrx/store';
import { BaseStateService } from '../../_super-classes/base-state-service';
import { Injectable } from '@angular/core';
import { State } from '../../state';
import { VehiclesActions } from './actions';
import { VehicleDto } from 'src/app/shared/generate-fake-data/generate-fake-data.service';

@Injectable()
export class VehiclesStateService extends BaseStateService<State, VehicleDto, VehicleDto, VehicleDto> {

    constructor(
        protected store: Store<State>,
        protected actionService: VehiclesActions) {
        super(actionService, store, "vehicles")
    }

    dispatchLoad() {
        if (!this.selectIsItemsLoaded())
            super.dispatchLoad();
    }
}
