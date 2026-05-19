import { combineReducers, createReducer, on } from "@ngrx/store";
import { setPatients, setPatientError, togglePatientLoading } from "./patient-actions";
import { ErrorState } from "../error-state";
import { BasicState } from "../basic-state";
import { Patient } from "../../models/patient";

const loading: boolean = false;

const error: ErrorState = {
    happend: false,
    message: ''
}

const patients: Patient[] = [];   

const loadingReducer = createReducer(
    loading,
    on(togglePatientLoading, (state) => !state)
);

export const errorReducer = createReducer(
    error,
    on(setPatientError, (state, action) => action)
);


export const patientsReducer = createReducer(
    patients,
    on(setPatients, (state, action) => action.patients)
);

export interface PatientStore extends BasicState {
    items: Patient[]
}

export const patientReducers = combineReducers({
  items: patientsReducer,
  loading: loadingReducer,
  error: errorReducer
});