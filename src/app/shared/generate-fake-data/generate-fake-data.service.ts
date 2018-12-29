import { Injectable } from '@angular/core';
import * as fakerAPI from 'faker'
import { of, Observable } from 'rxjs';

export interface VehicleDto {
    id: number;
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
    }

    getObservableRandomVehiclesData(): Observable<VehicleDto[]> {
        this.generateData();
        return of(myVehicles);
    }

    generateData(){
        for (let index = 0; index < 15; index++) {
            myVehicles.push(
                {
                    id: myVehicles.length + 1,
                    name: fakerAPI.name.findName(),
                    vin: fakerAPI.finance.iban(),
                    status: fakerAPI.random.boolean(),
                    address: fakerAPI.address.streetAddress() + ' ' + fakerAPI.address.city(),
                    regNum: fakerAPI.finance.bic()
                }
            );

        }
    }
}
