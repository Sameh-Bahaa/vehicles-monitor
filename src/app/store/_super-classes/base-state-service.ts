import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SortExpression, PagingInfo, RecordIdDto, ModelState } from "../state-models";
import * as _ from 'lodash';
import { BaseActions } from "./base-actions";

export class BaseStateService<STATE, INDTO extends RecordIdDto, OUTDTO extends RecordIdDto, FILTERDTO> {

  constructor(
    protected actionService: BaseActions<INDTO, OUTDTO, FILTERDTO>,
    protected store: Store<STATE>,
    protected modulePath: string) {
  }

  selectItems(): Observable<OUTDTO[]> {
    return this.store.select(s => eval(`s.${this.modulePath}.items`));
  }

  selectIsItemsLoaded(): boolean {
    var result = false;
    this.store.select(s => eval(`s.${this.modulePath}.items`)).subscribe(r => {
      result = (r.length > 0)
    })
    return result;
  }

  selectItem(id: number): Observable<INDTO> {
    return this.store
      .select(s => eval(`s.${this.modulePath}.items`))
      .pipe(map(items => _.find(items, i => i.ID == id)));
  }

  selectSortExpression(): Observable<SortExpression> {
    return this.store.select(s => eval(`s.${this.modulePath}.filter`)).pipe(
      map(f => ({
        sortField: f.sortFieldNames,
        assending: f.sortFieldDirections === 'desc' ? false : true
      }))
    );
  }

  selectPendingItem(): Observable<INDTO> {
    return this.store
      .select(s => eval(`s.${this.modulePath}.pendingItem`));
  }
  selectIsSavedSuccess(): Observable<Boolean> {
    return this.store.select(s => eval(`s.${this.modulePath}.isSuccess`));
  }

  selectModelState(): Observable<ModelState> {
    return this.store.select(s => eval(`s.${this.modulePath}.modelState`));
  }

  selectPagingInfo(): Observable<PagingInfo> {
    return this.store.select(s => eval(`s.${this.modulePath}`)).pipe(
      map(p => ({
        pageSize: p.filter.objectsPerPage,
        pageIndex: p.filter.page,
        count: p.count
      }))
    );
  }



  /************** Dispatchers ************** */
  dispatchLoad() {
    this.store.dispatch(this.actionService.createLoadAction());
  }

  dispatchFilter(filter: FILTERDTO) {
    this.store.dispatch(this.actionService.createFilterAction(filter));
  }

  dispatchAdd(item: INDTO) {
    this.store.dispatch(this.actionService.createAddItemAction(item));
  }

  dispatchSelectId(id: number) {
    this.store.dispatch(this.actionService.createSelectItemAction(id));
  }

  dispatchDelete(item: INDTO) {
    this.store.dispatch(this.actionService.createDeleteItemAction(item));
  }
  dispatchUpdate(item: INDTO) {
    this.store.dispatch(this.actionService.createUpdateItemAction(item));
  }
  dispatchUpdateSuccess(item: INDTO) {
    this.store.dispatch(this.actionService.createUpdateSuccessAction(item));
  }
}