import { combineReducers, createReducer, on } from "@ngrx/store";
import { setLocations, setLocationError, toggleLocationLoading } from "./location-actions";
import { Location } from "../../models/location";
import { ErrorState } from "../error-state";
import { BasicState } from "../basic-state";

const loading: boolean = false;

const error: ErrorState = {
    happend: false,
    message: ''
}

const locations: Location[] = [];   

const loadingReducer = createReducer(
    loading,
    on(toggleLocationLoading, (state) => !state)
);

export const errorReducer = createReducer(
    error,
    on(setLocationError, (state, action) => action)
);


export const locationsReducer = createReducer(
    locations,
    on(setLocations, (state, action) => action.locations)
);
    
export interface LocationStore extends BasicState {
    items: Location[]
}

export const locationReducers = combineReducers({
  items: locationsReducer,
  loading: loadingReducer,
  error: errorReducer
});