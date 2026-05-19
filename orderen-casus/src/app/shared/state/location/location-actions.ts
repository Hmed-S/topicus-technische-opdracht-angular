import { createAction, props } from "@ngrx/store";
import { ErrorState } from "../error-state";
import { Location } from "../../models/location";

export const SET_LOCATIONS = '[LOCATIONS] SET_LOCATIONS';
export const setLocations = createAction(SET_LOCATIONS, props<{ locations: Location[] }>());


export const GET_LOCATIONS = '[LOCATIONS] GET_LOCATIONS';
export const getLocations = createAction(GET_LOCATIONS);

export const TOGGLE_LOCATION_LOADING = '[LOCATIONS] TOGGLE_LOCATION_LOADING';
export const toggleLocationLoading = createAction(TOGGLE_LOCATION_LOADING);

export const SET_LOCATION_ERROR = '[LOCATIONS] SET_LOCATION_ERROR';
export const setLocationError = createAction(SET_LOCATION_ERROR, props<ErrorState>());