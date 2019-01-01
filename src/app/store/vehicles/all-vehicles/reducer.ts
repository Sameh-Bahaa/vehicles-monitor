import { VehiclesState } from './state';
import { VehiclesActions } from './actions';
import { PayloadAction } from '../../PayloadAction';
import * as _ from 'lodash';
import { filter, filterNumbers } from 'src/app/core/services/util';


export function vehiclesReducers(state: VehiclesState, action: PayloadAction<any>): VehiclesState {

    let itemActions = new VehiclesActions();
    switch (action.type) {
        case itemActions.ADD:
            return {
                ...state,
                modelState: null,
                isSuccess: false
            };
        case itemActions.ADD_SUCCESS:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ],
                modelState: null,
                isSuccess: true
            };
        case itemActions.ADD_MANY:
            return {
                ...state,
                items: [
                    //...state.items,
                    ...action.payload
                ],
                modelState: null,
                isSuccess: false
            };
        case itemActions.FILTER:
        let filteredEntities = filter(state.allItems, 'vin', action.payload || state.filter.vin);
            filteredEntities = filterNumbers(filteredEntities, 'client', action.payload || state.filter.client);
            filteredEntities = filterNumbers(filteredEntities, 'status', action.payload || [state.filter.status]);
            return {
                ...state,
                items: [
                    ...filteredEntities
                ],
                filter: {
                    ...state.filter,
                    ...action.payload
                },
                modelState: null,
                isSuccess: false
            };
        case itemActions.SELECT_ITEM:
            return {
                ...state,
                selectedId: action.payload,
                modelState: null,
                isSuccess: false
            };
        case itemActions.FAILED:
            return {
                ...state,
                modelState: action.payload,
                isSuccess: false
            };
        case itemActions.LOAD:
            return {
                ...state,
                modelState: null,
                isSuccess: false
            };
        case itemActions.UPDATE_SUCCESS:
            let v = _.find(state.items, i => i.id == action.payload.id);
            v.status = action.payload.status;
            return {
                ...state,
                items: [
                    ...state.items
                ],
                modelState: null,
                isSuccess: true
            };
        case itemActions.LOAD_ALL:
            return {
                ...state,
                allItems: action.payload.list,
                modelState: null,
                isSuccess: false
            };
        case itemActions.ADD_ALL_ITEMS:
            return {
                ...state,
                allItems: action.payload,
                modelState: null,
                isSuccess: true
            };
        default:
            return state;
    }
}
