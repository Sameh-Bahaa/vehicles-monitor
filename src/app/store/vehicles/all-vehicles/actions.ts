import { BaseActions } from "../../_super-classes/base-actions";
import { Injectable } from "@angular/core";
import { VehicleDto } from 'src/app/shared/generate-fake-data/generate-fake-data.service';




@Injectable()
export class VehiclesActions extends BaseActions<VehicleDto, VehicleDto, VehicleDto> {

    constructor() {
        super("vehicles")
    }
}

