import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { State } from "../../state";
import { VehiclesActions } from "./actions";
import { of } from "rxjs";
import { PayloadAction } from "../../PayloadAction";
import { catchError } from 'rxjs/internal/operators/catchError';
import { map, mergeMap, withLatestFrom, switchMap } from 'rxjs/operators';
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';

const emptyAction = { type: '[Vehicle] empty', payload: { list: null, count: null } };

@Injectable()
export class VehiclesEffectsService {

    constructor(
        private actions$: Actions,
        private store: Store<State>,
        private itemActions: VehiclesActions,
    ) {
    }
    // @Effect()
    // onLoadVehicles(): Observable<ActionCreator<any>> {
    //     return this.actions$.pipe(
    //         ofType(this.itemActions.LOAD),
    //         mergeMap(action =>
    //             this.fakeProxy.getObservableRandomVehiclesData().pipe(
    //                 map(res => {
    //                     return this.itemActions.createAddManyItemsAction(res);
    //                 })
    //                 , catchError(err => of(this.itemActions.createOperationFailedAction(err)))
    //             )
    //         ));
    // }


    // @Effect()
    // onFilterVehicles(): Observable<ActionCreator<any>> {
    //     return this.actions$.pipe(
    //         ofType(this.itemActions.FILTER),
    //         mergeMap(action =>
    //             this.fbService.getAllVehicles()
    //                 .pipe(
    //                     map(res => {

    //                         let allVehicles = (res.val() as vehicleDto[]);
    //                         allVehicles = (allVehicles[0]) ? allVehicles : allVehicles.slice(1);
    //                         let filtered = allVehicles;
    //                         let filters = action["payload"];

    //                         // let ff = allVehicles.filter(v => {
    //                         //     if (filters)
    //                         //         Object.keys(filters).forEach(key => {
    //                         //             return (v[key] as string).toLowerCase().includes(filters[key].toLowerCase())
    //                         //         });
    //                         // });


    //                         // if(!filters && filters != null)
    //                         //  filtered = allVehicles.filter(i =>
    //                         //     (filters.vin && i.vin.toLowerCase().includes(filters.vin.toLowerCase())) &&
    //                         //     (filters.client && i.client == filters.client || true) &&
    //                         //     (filters.status && i.status == filters.status || true)
    //                         //     );

    //                         if(!filters && filters != null)
    //                         filtered =  allVehicles.filter(item =>
    //                             Object.keys(filters)
    //                               .map(keyToFilterOn =>
    //                                 item[keyToFilterOn] == filters[keyToFilterOn] 
    //                               )
    //                               .reduce((x, y) => x && y, true),
    //                           );
    //                         return this.itemActions.createAddManyItemsAction(filtered);
    //                     })
    //                     , catchError(err => of(this.itemActions.createOperationFailedAction(err)))
    //                 )
    //         ));
    // }

    // @Effect()
    // onAddManyVehicles(): Observable<ActionCreator<any>> {
    //     return this.actions$.pipe(
    //         ofType(this.itemActions.ADD),
    //         mergeMap(action => {
    //             return this.fakeProxy.getObservableRandomVehiclesData().pipe(
    //                 map(res => {
    //                     return this.itemActions.createAddManyItemsAction(res);
    //                 })
    //                 , catchError(err => of(this.itemActions.createOperationFailedAction(err)))
    //             )
    //         }
    //         ));
    // }

    @Effect()
    onFailed() {
        return this.actions$.pipe(
            ofType(this.itemActions.FAILED),
            mergeMap(action => {
                console.log((action as PayloadAction<any>).payload);
                return of(emptyAction)
            })
        );
    }

}
