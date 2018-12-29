import { ModelState } from "../../state-models";
import { VehicleDto } from 'src/app/shared/generate-fake-data/generate-fake-data.service';

export interface VehiclesState {
    items: VehicleDto[],
    selectedId?: number;
    modelState?: ModelState;
    isSuccess: boolean;
};

export const VehiclesInitialState: VehiclesState = {
    items: [],
    isSuccess: false
};
