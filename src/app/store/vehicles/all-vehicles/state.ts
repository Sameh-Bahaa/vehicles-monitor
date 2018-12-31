import { ModelState } from "../../state-models";
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';

export interface VehiclesState {
    items: vehicleDto[],
    filter: vehicleDto;
    selectedId?: number;
    modelState?: ModelState;
    isSuccess: boolean;
};

export const VehiclesInitialState: VehiclesState = {
    items: [],
    filter: null,
    isSuccess: false
};
