import { VehiclesState } from './state';
import { VehiclesActions } from './actions';
import { PayloadAction } from '../../PayloadAction';
import * as _ from 'lodash';


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
            return {
                ...state,
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
        default:
            return state;
    }
}
