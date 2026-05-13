import { inject, Injectable, Injector, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';
import { ORDER_FIXTURES } from 'src/app/fixtures';
import { Order } from 'src/app/models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly storageKey = 'orders';
  private readonly injector = inject(Injector);
  private readonly ordersStore = signal<Order[]>(this.getInitialOrders());
  private readonly orders$ = toObservable(this.ordersStore, {
    injector: this.injector,
  });

  getOrders(): Observable<Order[]> {
    return this.orders$;
  }

  addOrder(order: Order): Observable<Order> {
    const nextOrders = [...this.ordersStore(), order];
    this.ordersStore.set(nextOrders);
    this.persist(nextOrders);

    return of(order);
  }

  //You can use this to reset the fixtures to the default, if you want to reset the state after testing.
  resetOrders(): Observable<Order[]> {
    const fixtureOrders = this.cloneFixtureOrders();
    this.ordersStore.set(fixtureOrders);
    this.persist(fixtureOrders);

    return of(fixtureOrders);
  }

  private getInitialOrders(): Order[] {
    const storedOrders = this.readFromStorage();
    if (storedOrders) {
      return storedOrders;
    }

    const fixtureOrders = this.cloneFixtureOrders();

    this.persist(fixtureOrders);
    return fixtureOrders;
  }

  private cloneFixtureOrders(): Order[] {
    return ORDER_FIXTURES.map((order) => ({
      ...order,
      testIds: [...order.testIds],
    }));
  }

  private readFromStorage(): Order[] | null {
    const serializedOrders = localStorage.getItem(this.storageKey);
    if (!serializedOrders) {
      return null;
    }

    try {
      return JSON.parse(serializedOrders) as Order[];
    } catch {
      return null;
    }
  }

  private persist(orders: Order[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(orders));
  }
}
