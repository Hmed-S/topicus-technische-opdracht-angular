import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { patientReducers } from './shared/state/patient/patient-reducer';
import { testReducers } from './shared/state/test/test-reducer';
import { locationReducers } from './shared/state/location/location-reducer';
import { orderReducers } from './shared/state/order/order-reducer';
import { PatientEffects } from './shared/state/patient/patient-effects';
import { TestEffects } from './shared/state/test/test-effects';
import { LocationEffects } from './shared/state/location/locations-effects';
import { OrderEffects } from './shared/state/order/order-effects';
import { provideNativeDateAdapter } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideNativeDateAdapter(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore(),
    provideState('patients', patientReducers),
    provideState('tests', testReducers),
    provideState('locations', locationReducers),
    provideState('orders', orderReducers),
    provideEffects(PatientEffects, TestEffects, LocationEffects, OrderEffects),
  ],
};
