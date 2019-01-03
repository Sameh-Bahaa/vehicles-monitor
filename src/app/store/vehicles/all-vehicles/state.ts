import { ModelState } from "../../state-models";
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';

export interface VehiclesState {
    allItems: vehicleDto[];
    items: vehicleDto[],
    filter: filterVehicleDto;
    selectedId?: number;
    modelState?: ModelState;
    isSuccess: boolean;
};

export const VehiclesInitialState: VehiclesState = {
    allItems: [],
    items: [],
    filter: {
        vin : null,
        client: [],
        status: null
    },
    isSuccess: false
};

export interface filterVehicleDto{
    vin : string;
    client: number[];
    status: number
};