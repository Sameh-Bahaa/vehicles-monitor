import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { State } from "../../state";
import { VehiclesActions } from "./actions";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { ActionCreator } from "../../_super-classes/action-creator";
import { PayloadAction } from "../../PayloadAction";
import { catchError } from 'rxjs/internal/operators/catchError';
import { map, mergeMap, withLatestFrom, switchMap } from 'rxjs/operators';

const emptyAction = { type: '[Vehicle] empty', payload: { list: null, count: null } };

@Injectable()
export class VehiclesEffectsService {

    constructor(
        private actions$: Actions,
        private store: Store<State>,
        private itemActions: VehiclesActions
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
    //             this.fakeProxy.filterVehicles('Billy')
    //             .pipe(
    //                 map(res => {
    //                     console.log(action)
    //                     return this.itemActions.createAddManyItemsAction(res);
    //                 })
    //                 , catchError(err => of(this.itemActions.createOperationFailedAction(err)))
    //             )
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
                console.log((action as PayloadAction<any>));
                return of(emptyAction)
            })
        );
    }

}
