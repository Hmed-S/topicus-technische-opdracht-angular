import { createAction, props } from "@ngrx/store";
import { ErrorState } from "../error-state";
import { Patient } from "../../models/patient"; 

export const SET_PATIENTS = '[PATIENTS] SET_PATIENTS';
export const setPatients = createAction(SET_PATIENTS, props<{ patients: Patient[] }>());


export const GET_PATIENTS = '[PATIENTS] GET_PATIENTS';
export const getPatients = createAction(GET_PATIENTS);

export const TOGGLE_PATIENT_LOADING = '[PATIENT] TOGGLE_PATIENT_LOADING';
export const togglePatientLoading = createAction(TOGGLE_PATIENT_LOADING);

export const SET_PATIENT_ERROR = '[PATIENT] SET_PATIENT_ERROR';
export const setPatientError = createAction(SET_PATIENT_ERROR, props<ErrorState>());