import { Injectable } from '@angular/core';
import * as fakerAPI from 'faker'

export interface VehicleDto {
    vin: string;
    name: string;
    address: string;
    regNum: string;
    status: boolean;
}
var myVehicles: VehicleDto[] = [];

@Injectable()
export class GenerateFakeDataService {
    constructor() {
        for (let index = 0; index < 15; index++) {
            myVehicles.push(
                {
                    name: fakerAPI.name.findName(),
                    vin: fakerAPI.finance.iban(),
                    status: fakerAPI.random.boolean(),
                    address: fakerAPI.address.streetAddress() + ' ' + fakerAPI.address.city(),
                    regNum: fakerAPI.finance.bic()
                }
            );

        }
    }

    getRandomVehiclesData(): VehicleDto[] {
        return myVehicles;
    }
}
