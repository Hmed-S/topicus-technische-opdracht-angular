import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';;
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { Store } from '@ngrx/store';
import { Appstore } from 'src/app/shared/state/app-store';
import { Order } from 'src/app/shared/models/order';
import { GET_ORDERS } from 'src/app/shared/state/order/order-actions';

@Component({
  selector: 'app-order-overview',
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './order-overview.html',
  styleUrl: './order-overview.scss',
})
export class OrderOverview implements OnInit {
    private readonly store = inject(Store<Appstore>);
    calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    firstDay: 1,
    plugins: [dayGridPlugin]
  };

   ngOnInit(): void {
    this.store.dispatch({ type: GET_ORDERS });

    this.store.subscribe((state) => {
      const currentEvents = Array.isArray(this.calendarOptions.events)
        ? this.calendarOptions.events
        : [];

      this.calendarOptions.events = [
        ...currentEvents,
        ...state.orders.items.map((order: Order) => ({
          title: `${order.startDateTime} - ${order.endDateTime}`,
          start: order.startDateTime,
          end: order.endDateTime,
        })),
      ];
    
    });

  }

}

