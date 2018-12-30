import { ModelState } from "../../state-models";
import { VehicleDto } from 'src/app/shared/generate-fake-data/generate-fake-data.service';

export interface VehiclesState {
    items: VehicleDto[],
    filter: VehicleDto;
    selectedId?: number;
    modelState?: ModelState;
    isSuccess: boolean;
};

export const VehiclesInitialState: VehiclesState = {
    items: [],
    filter: null,
    isSuccess: false
};
