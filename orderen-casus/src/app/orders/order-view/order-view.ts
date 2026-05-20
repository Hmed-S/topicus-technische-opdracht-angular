import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Order } from 'src/app/shared/models/order';
import { Patient } from 'src/app/shared/models/patient';
import { Location } from 'src/app/shared/models/location'
import { Test } from 'src/app/shared/models/test';
import { Appstore } from 'src/app/shared/state/app-store';
import { TestOverview } from "src/app/tests/test-overview/test-overview";
import { FriendlyDatePipe } from 'src/app/shared/pipes/friendly-date.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-view',
  imports: [DatePipe, FriendlyDatePipe, TestOverview],
  templateUrl: './order-view.html',
  styleUrl: './order-view.scss',
})
export class OrderView implements OnInit {
  protected order: Order | undefined;
  protected patient: Patient | undefined;
  protected location: Location | undefined;
  protected tests: Test[] | undefined;
  private readonly store;
  displayedColumns: string[] = ['code', 'name', 'duration'];

  constructor(store: Store<Appstore>) {
    this.store = store;
  }

  ngOnInit(): void {
    this.store.subscribe((state) =>{
      this.order = state.orders.currentOrder;
      
      this.patient = state.patients.items.find((patient: Patient) =>{
        return patient.id === this.order?.patientId;
      });

      this.location = state.locations.items.find((location: Location) => {
        return location.id === this.order?.locationId;
      });

      this.tests = state.tests.items.filter((test : Test) =>{
        return this.order?.testIds.some(id => id === test.id);
      });

    });
  }

}
