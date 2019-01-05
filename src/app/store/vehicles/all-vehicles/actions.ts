import { BaseActions } from "../../_super-classes/base-actions";
import { Injectable } from "@angular/core";
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';
import { filterVehicleDto } from './state';




@Injectable()
export class VehiclesActions extends BaseActions<vehicleDto, vehicleDto, filterVehicleDto> {

    constructor() {
        super("vehicles")
    }
}

