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
        private itemActions: VehiclesActions
    ) {
    }
   

    @Effect()
    onFailed() {
        return this.actions$.pipe(
            ofType(this.itemActions.FAILED),
            mergeMap(action => {
                console.error((action as PayloadAction<any>).payload);
                return of(emptyAction)
            })
        );
    }

}
