import { Component, inject } from '@angular/core';
import { take } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';
import { OrderService } from 'src/app/services/order.service';
import { PatientService } from 'src/app/services/patient.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly patientService = inject(PatientService);
  private readonly testService = inject(TestService);
  private readonly locationService = inject(LocationService);
  private readonly orderService = inject(OrderService);

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
