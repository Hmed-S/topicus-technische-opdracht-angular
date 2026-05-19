import { combineReducers, createReducer, on } from "@ngrx/store";
import { setOrders, setOrderError, toggleOrderLoading } from "./order-actions";
import { ErrorState } from "../error-state";
import { BasicState } from "../basic-state";
import { Order } from "../../models/order";

const loading: boolean = false;

const error: ErrorState = {
    happend: false,
    message: ''
}

const orders: Order[] = [];   

const loadingReducer = createReducer(
    loading,
    on(toggleOrderLoading, (state) => !state)
);

export const errorReducer = createReducer(
    error,
    on(setOrderError, (state, action) => action)
);


export const ordersReducer = createReducer(
    orders,
    on(setOrders, (state, action) => action.orders)
);
    
export interface OrderStore extends BasicState {
    items: Order[]
}

export const orderReducers = combineReducers({
  items: ordersReducer,
  loading: loadingReducer,
  error: errorReducer
});