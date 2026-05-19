import { Component, inject } from '@angular/core';
import { take } from 'rxjs';
import { LocationService } from 'src/app/shared/services/location.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { PatientService } from 'src/app/shared/services/patient.service';
import { TestService } from 'src/app/shared/services/test.service';
import { Store } from '@ngrx/store';
import { GET_PATIENTS } from './shared/state/patient/patient-actions';
import { GET_TESTS } from './shared/state/test/test-actions';
import { GET_LOCATIONS } from './shared/state/location/location-actions';
import { GET_ORDERS } from './shared/state/order/order-actions';
import { Appstore } from './shared/state/app-store';
import { RouterOutlet } from '@angular/router';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet]
})
export class App {
  private readonly patientService = inject(PatientService);
  private readonly testService = inject(TestService);
  private readonly locationService = inject(LocationService);
  private readonly orderService = inject(OrderService);
  private readonly store = inject(Store<Appstore>);

  logStore(): void {
    this.store.dispatch({ type: GET_PATIENTS });
    this.store.dispatch({ type: GET_TESTS });
    this.store.dispatch({ type: GET_LOCATIONS });
    this.store.dispatch({ type: GET_ORDERS });

    this.store.select('patients').pipe(take(1)).subscribe((patientState) => {
      console.log('patientState', patientState);
    });
    this.store.select('tests').pipe(take(1)).subscribe((testState) => {
      console.log('testState', testState);
    });
    this.store.select('locations').pipe(take(1)).subscribe((locationState) => {
      console.log('locationState', locationState);
    });
    this.store.select('orders').pipe(take(1)).subscribe((orderState) => {
      console.log('orderState', orderState);
    });
    
  }
  
  logPatients(): void {
    this.patientService.getPatients().subscribe((patients) => {
      console.log('patients', patients);
    });
  }

  logTests(): void {
    this.testService.getTests().subscribe((tests) => {
      console.log('tests', tests);
    });
  }

  logLocations(): void {
    this.locationService.getLocations().subscribe((locations) => {
      console.log('locations', locations);
    });
  }

  logOrders(): void {
    this.orderService
      .getOrders()
      .pipe(take(1))
      .subscribe((orders) => {
        console.log('orders', orders);
      });
  }
}
