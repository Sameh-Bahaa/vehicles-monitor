import { Injectable } from '@angular/core';
import * as fakerAPI from 'faker'
import { of, Observable } from 'rxjs';
import { vehicleDto } from '../DTOs/vehicles';


var myVehicles: vehicleDto[] = [];

@Injectable()
export class GenerateFakeDataService {
    constructor() {
    }

    getObservableRandomVehiclesData(): Observable<vehicleDto[]> {
        this.generateData();
        return of(myVehicles);
    }

    generateData() {
        for (let index = 0; index < 15; index++) {
            myVehicles.push(
                {
                    id: myVehicles.length + 1,
                    client: fakerAPI.random.number({min: 1, max: 6}),
                    vin: fakerAPI.finance.iban(),
                    status: fakerAPI.random.number({min: 1, max: 4}),
                    regNum: fakerAPI.finance.bic(),
                    avatar: fakerAPI.internet.avatar(),
                    make: fakerAPI.internet.userName()
                }
            );

        }
    }

    filterVehicles(name: string) {
        let result = myVehicles.filter(function (el) {
            return el.vin.toLowerCase().indexOf(name.toLowerCase()) > -1;
        });
        return of(result)
    }
}
