import { Injectable, Inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Appstore } from "../app-store";
import { catchError, of, switchMap, tap } from "rxjs";
import { setOrders, setOrderError, toggleOrderLoading, getOrders } from "./order-actions";
import { OrderService } from "../../services/order.service";

@Injectable()
export class OrderEffects{
    
    constructor( 
        private actions$: Actions,
        @Inject(Store) private store: Store<Appstore>,
        private orderService: OrderService
    ) {}

    getOrders$ = createEffect( () => this.actions$.pipe(
        ofType(getOrders),
        tap( () => this.store.dispatch( toggleOrderLoading( )) ),
        switchMap(action => this.orderService.getOrders()
        .pipe(
            switchMap(orders => of(
                toggleOrderLoading(),
                setOrders({ orders: orders })
            )),
            catchError(() => of(setOrderError( {happend:true, message: 'unable to retrieve Orders' } ))),
        ),
    )
));


}