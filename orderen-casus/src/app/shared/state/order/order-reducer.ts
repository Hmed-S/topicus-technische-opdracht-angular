import { combineReducers, createReducer, on } from "@ngrx/store";
import { setOrders, setOrderError, toggleOrderLoading, addTest, setLocationId, setPatientId, setStartDateTime, setEndDateTime, addOrder } from "./order-actions";
import { ErrorState } from "../error-state";
import { BasicState } from "../basic-state";
import { Order } from "../../models/order";

const loading: boolean = false;

const error: ErrorState = {
    happend: false,
    message: ''
}

const orders: Order[] = [];

const currentOrder: Order = {
    id: '',
    patientId: '',
    locationId: '', 
    testIds: [],
    startDateTime: '',
    endDateTime: ''
}

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
    on(setOrders, (state, action) => action.orders),
    on(addOrder, (state, action) => [...state, action.order])
);

export const currentOrderReducer = createReducer(
    currentOrder,
    on(setPatientId, (state, action) => ({ ...state, patientId: action.patientId })),
    on(setLocationId, (state, action) => ({ ...state, locationId: action.locationId })),
    on(addTest, (state, action) => ({ ...state, testIds: [...state.testIds, action.testId] })),
    on(setStartDateTime, (state, action) => ({ ...state, startDateTime: action.startDateTime })),
    on(setEndDateTime, (state, action) => ({ ...state, endDateTime: action.endDateTime })),
);
    
export interface OrderStore extends BasicState {
    items: Order[]
    currentOrder: Order
}

export const orderReducers = combineReducers({
  items: ordersReducer,
  loading: loadingReducer,
  error: errorReducer,
  currentOrder: currentOrderReducer
});