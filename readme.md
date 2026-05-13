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
A mock version of the backend API is provided in the form of services, which return fixture responses.
The order service additionally lets you create new orders.


- `GET /patients` -> list of patients
- `GET /locations` -> list of selectable locations
- `GET /tests` -> list of selectable tests
- `GET /orders` -> existing orders to show on calendar
- `POST /orders` -> create a new order

## What would we like to see (Functionally):
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

## What we would like to see (technically)
The code is structured, readable, and easy to run.
Please limit your use of AI for generating the application code. We expect you to be able to explain the code you submit.


## Deliverables
- The Source code in a Git repository. Preferably fork this repository on GitHub.
- A Short `README` with:
    - Setup/run instructions
    - Assumptions/limitations
    - Brief architecture notes

