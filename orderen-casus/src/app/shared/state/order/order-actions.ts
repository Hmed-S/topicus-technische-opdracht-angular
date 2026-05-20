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

// current order state
export const SETPATIENT_ID = '[ORDERS] SETPATIENT_ID';
export const setPatientId = createAction(SETPATIENT_ID, props<{ patientId: string }>());

export const SETLOCATION_ID = '[ORDERS] SETLOCATION_ID';
export const setLocationId = createAction(SETLOCATION_ID, props<{ locationId: string }>());

export const ADD_ORDER = '[ORDERS] ADD_ORDER';
export const addOrder = createAction(ADD_ORDER, props<{ order: Order }>());

export const SAVE_ORDER = '[ORDERS] SAVE_ORDER';
export const saveOrder = createAction(SAVE_ORDER, props<{ order: Order }>());

export const ADDTEST = '[ORDERS] ADDTEST';
export const addTest = createAction(ADDTEST, props<{ testId: string }>());

export const SET_STARTDATETIME = '[ORDERS] SET_STARTDATETIME';
export const setStartDateTime = createAction(SET_STARTDATETIME, props<{ startDateTime: string }>());

export const SET_ENDDATETIME = '[ORDERS] SET_ENDDATETIME';  
export const setEndDateTime = createAction(SET_ENDDATETIME, props<{ endDateTime: string }>());

// when booking an order, we need available times. Haven't implemented, you get the idea.
export const SET_AVAILABLE_TIMES = '[ORDERS] SET_AVAILABLE_TIMES';
export const setAvailableTimes = createAction(SET_AVAILABLE_TIMES, props<{ availableTimes: string[] }>());