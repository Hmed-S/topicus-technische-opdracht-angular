import { createAction, props } from "@ngrx/store";
import { ErrorState } from "../error-state";
import { Test } from "../../models/test"; 

export const SET_TESTS = '[TESTS] SET_TESTS';
export const setTests = createAction(SET_TESTS, props<{ tests: Test[] }>());


export const GET_TESTS = '[TESTS] GET_TESTS';
export const getTests = createAction(GET_TESTS);

export const TOGGLE_TESTS_LOADING = '[TESTS] TOGGLE_TESTS_LOADING';
export const toggleTestsLoading = createAction(TOGGLE_TESTS_LOADING);

export const SET_TESTS_ERROR = '[TESTS] SET_TESTS_ERROR';
export const setTestsError = createAction(SET_TESTS_ERROR, props<ErrorState>());