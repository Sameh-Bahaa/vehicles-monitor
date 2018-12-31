import { BaseActions } from "../../_super-classes/base-actions";
import { Injectable } from "@angular/core";
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';




@Injectable()
export class VehiclesActions extends BaseActions<vehicleDto, vehicleDto, vehicleDto> {

    constructor() {
        super("vehicles")
    }
}

