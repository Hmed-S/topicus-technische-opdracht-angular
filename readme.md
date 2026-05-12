# Technical Case: Lab Order Planner (Angular)

We're looking to build a small Angular application for planning lab orders in a calendar.
This order planner can be used to view existing orders and create a new order via a wizard.

## Domain Models
You may treat the following models as an adequate depiction of the domain.
You may enrich these models as needed if you feel like you want to add more functionality that these models do not cover.

```typescript
export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export interface Test {
  id: string;
  name: string;
  code: string;
  durationMinutes: number;
}

export interface Location {
  id: string;
  name: string;
  room: string;
}

export interface Order {
  id: string;
  patientId: string;
  locationId: string;
  testIds: string[];
  startDateTime: string;
  endDateTime: string;
}
```

### Mock endpoints (fixture responses)
You may implement a mock version of the following endpoints in your application to simulate backend requests. These can be simple Angular services
which immediately return a list of test patients. The `GET /orders` and `POST /orders` calls may retrieve and store orders in sessionStorage/localStorage,
but other storage solutions such as a service based store, a store library such as Elf or NGRX, or even a local sqlite database are all fine!

- `GET /patients` -> list of patients
- `GET /locations` -> list of selectable locations
- `GET /tests` -> list of selectable tests
- `GET /orders` -> existing orders to show on calendar
- `POST /orders` -> create a new order

## 3) What would we like to see (Functionally):
A basic angular application with a design system of your choice (or your own styling, whichever you prefer). For the calendar, use the `fullCalendar` library.
We would like the application to have the following features/behavior:

- The Main screen shows:
    - A calendar with all existing orders
    - An action/button to create a new order
- "Create order" opens a wizard with the following steps:
    1. Select patient
    2. Select one or more tests from the list of tests
    3. Select location from the list of locations
    4. Select start and end datetime, of length between 30 and 60 minutes (in the future, and not in the weekend, we work from 9 to 5!)
- When all form elements are valid, show us a summary page to confirm the order details
- On successful completion:
    - A new order is created, and
    - the order appears immediately on the calendar

## 4) What we would like to see (Technically):
- The code is readable, structured, and easy to run
- The Code is tested with a testing framework of your choice

## 5) Deliverables
- The Source code in a Git repository
- A Short `README` with:
    - Setup/run instructions
    - Assumptions/limitations
    - Brief architecture notes

