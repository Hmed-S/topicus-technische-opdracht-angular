import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { Appstore } from 'src/app/shared/state/app-store';
import { Store } from '@ngrx/store';
import { GET_PATIENTS } from 'src/app/shared/state/patient/patient-actions';
import { GET_LOCATIONS } from 'src/app/shared/state/location/location-actions';
import { GET_TESTS } from 'src/app/shared/state/test/test-actions';
import { Patient } from 'src/app/shared/models/patient';
import { Location } from 'src/app/shared/models/location';
import { Test } from 'src/app/shared/models/test';
import { Order } from 'src/app/shared/models/order';
import { addTest, setPatientId, setLocationId, setEndDateTime, setStartDateTime, saveOrder } from 'src/app/shared/state/order/order-actions';
import { OrderView } from "../order-view/order-view";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.html',
  styleUrl: './order-form.scss',
  imports: [
    MatStepperModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatTimepickerModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    OrderView
]
  
})
export class OrderForm implements OnInit{
  displayedColumns: string[] = ['code', 'name', 'duration'];

  private readonly store: Store<Appstore>;
  protected patients : Patient[] = [];
  protected locations: Location[] = [];
  protected tests: Test[] = [];
  protected currentOrder : Order | null = null;
  protected timeSlots: string[] = ['09:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'];
  private startDate: string = '';
  private endDate: string = '';  
  @ViewChild('stepper') stepper: MatStepper | undefined

  constructor(store: Store<Appstore>) {
    this.store = store;
  }

  ngOnInit(){
    this.store.dispatch({ type:  GET_PATIENTS });
    this.store.dispatch({ type:  GET_LOCATIONS });
    this.store.dispatch({ type:  GET_TESTS });

    this.store.subscribe((state) => {
      console.log('state:');
      
      console.log(state.orders.currentOrder);
      this.currentOrder = state.orders.currentOrder;
      this.patients = state.patients.items;
      this.locations = state.locations.items;
      this.tests = state.tests.items;
    });

  }


  setPatient(patientId: string) {
    this.store.dispatch(setPatientId({ patientId }));
  }

  setLocation(locationId: string) {
    console.log(locationId);
    this.store.dispatch(setLocationId({ locationId }));
  }

  onDateChange(event : MatDatepickerInputEvent<Date>) {
    // We save the day only for now, time will be set later. 
    const date = new Date(event.value?.getFullYear() ?? 0, event.value?.getMonth() ?? 0, event.value?.getDate() ?? 0);
    this.startDate = date.toISOString();
    this.endDate = date.toISOString();
  }

  
  addTest(testId: string) {
    this.store.dispatch(addTest({testId: testId}));
  }


  convertDate(dateTimeString:string, time:string) : string{
    const date = new Date(dateTimeString);
    const timeParts = time.split(':');
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
    date.setUTCHours(hours, minutes);
    return date.toISOString();
  }

  setStartTime(time: string) {
    this.startDate = this.convertDate(this.startDate, time);
  }

  setEndTime(time: string) {
    this.endDate = this.convertDate(this.endDate, time);

    this.store.dispatch(setStartDateTime({ startDateTime: this.startDate }));
    this.store.dispatch(setEndDateTime({ endDateTime: this.endDate }));
  } 
  
  addOrder() {
    console.log('Saving order: ', this.currentOrder);
    if (!this.currentOrder) {
      console.warn('No current order to save.');
      return;
    }

    this.store.dispatch(saveOrder({ order: this.currentOrder }));
  }



  public showNextButton(stepNumber: number): boolean {
      switch(stepNumber) {
        case 1: 
          return this.currentOrder?.patientId !== '' && this.currentOrder?.locationId !== '';
        case 2:
          return this.currentOrder?.testIds.length !== 0;
        case 3:
          return this.currentOrder?.startDateTime !== '' && this.currentOrder?.endDateTime !== '';
        default:
          return false;
      }
  }


}
