import { VehiclesState, VehiclesInitialState } from "./vehicles/all-vehicles/state";


export interface State {
    vehicles: VehiclesState;
}

export function getInitialState() {
    const strState = window.localStorage.getItem('$$Vehicles-Monitor$$');
    if (strState) {
        const state = JSON.parse(strState) as State;
        return state;
    }
    return {
        vehicles: VehiclesInitialState,
    };
};
