import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';;
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Store } from '@ngrx/store';
import { Appstore } from 'src/app/shared/state/app-store';
import { Order } from 'src/app/shared/models/order';
import { GET_ORDERS } from 'src/app/shared/state/order/order-actions';
import { OrderForm } from "../order-form/order-form";
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-order-overview',
  imports: [CommonModule, FullCalendarModule, OrderForm, MatButtonModule, MatIconModule],
  templateUrl: './order-overview.html',
  styleUrl: './order-overview.scss',
})
export class OrderOverview implements OnInit {
    private readonly store = inject(Store<Appstore>);
    private readonly dialog = inject(MatDialog);
    
    calendarEvents: EventInput[] = [];
    
    calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    firstDay: 1,
    plugins: [dayGridPlugin]
  };

   ngOnInit(): void {
    this.store.dispatch({ type: GET_ORDERS });

    this.store.subscribe((state) => {
      console.log('updated orders list');
      console.log(state.orders.items);

      this.calendarEvents = [];

      this.calendarEvents = state.orders.items.map((order: Order) => ({
        title: `${order.startDateTime} - ${order.endDateTime}`,
        start: order.startDateTime,
        end: order.endDateTime,
      }));
          
    });

  }

  showOrderForm() {
    this.dialog.open(OrderForm, {
      width: '900vw',
      maxWidth: '80vw',
      height: '600px',
      disableClose: true
    });
  }

}

