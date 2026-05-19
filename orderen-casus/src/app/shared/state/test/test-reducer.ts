import { combineReducers, createReducer, on } from "@ngrx/store";
import { Test } from "../../models/test";
import { setTests, setTestsError, toggleTestsLoading } from "./test-actions";
import { ErrorState } from "../error-state";
import { BasicState } from "../basic-state";

const loading: boolean = false;

const error: ErrorState = {
    happend: false,
    message: ''
}

const tests: Test[] = [];   

const loadingReducer = createReducer(
    loading,
    on(toggleTestsLoading, (state) => !state)
);

export const errorReducer = createReducer(
    error,
    on(setTestsError, (state, action) => action)
);

export const testsReducer = createReducer(
    tests,
    on(setTests, (state, action) => action.tests)
);

export interface TestStore extends BasicState {
    items: Test[]
}

export const testReducers = combineReducers({
  items: testsReducer,
  loading: loadingReducer,
  error: errorReducer
});