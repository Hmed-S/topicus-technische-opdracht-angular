import { Injectable, Inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Appstore } from "../app-store";
import { catchError, of, switchMap, tap } from "rxjs";
import { addOrder, setOrders, setOrderError, toggleOrderLoading, getOrders, saveOrder } from "./order-actions";
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

saveOrder$ = createEffect( () => this.actions$.pipe(
    ofType(saveOrder),
    tap( () => this.store.dispatch( toggleOrderLoading( )) ),
    switchMap(action => this.orderService.addOrder(action.order)
    .pipe(
        switchMap(order => of(
            toggleOrderLoading(),
            addOrder({ order: order })
        )),
        catchError(() => of(setOrderError( {happend:true, message: 'unable to save Order' } ))),
    ),
)
));


}