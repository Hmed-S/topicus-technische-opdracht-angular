import { createAction, props } from "@ngrx/store";
import { ErrorState } from "../error-state";
import { Order } from "../../models/order";

export const SET_ORDERS = '[ORDERS] SET_ORDERS';
export const setOrders = createAction(SET_ORDERS, props<{ orders: Order[] }>());


export const GET_ORDERS = '[ORDERS] GET_ORDERS';
export const getOrders = createAction(GET_ORDERS);

export const TOGGLE_ORDER_LOADING = '[ORDERS] TOGGLE_ORDER_LOADING';
export const toggleOrderLoading = createAction(TOGGLE_ORDER_LOADING);

export const SET_ORDER_ERROR = '[ORDERS] SET_ORDER_ERROR';
export const setOrderError = createAction(SET_ORDER_ERROR, props<ErrorState>());