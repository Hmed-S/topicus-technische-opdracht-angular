# Setup

1. Install dependencies from orderen-casus directory:
    ````
    npm i
    ````
2. Run the app from the orderen-casus directory:
    ````
    npx ng serve -o
    ````
    
# Implemented functionality

- The Main screen shows:
    - [x] A calendar with all existing orders
    - [x] An action/button to create a new order
- "Create order" opens a wizard with the following steps:
    1. - [x] Select patient
    2. - [x] Select one or more tests from the list of tests
    3. - [x] Select location from the list of locations
    4.  Select start and end datetime, of length between 30 and 60 minutes (in the future, and not in the weekend, we work from 9 to 5!)
- [x] When all form elements are valid, show us a summary page to confirm the order details | Date validation happens after the summary is shown.
- On successful completion:
    - [x] A new order is created, and
    -  the order appears immediately on the calendar

## Notes
Validation works on order when in the past only. Orders in the weekend throw an error. Page must be refreshed to see a new order on the calendar. Sometimes an order is a day before when added, most likely due to a bug with time zones.
When you click the button to add a new order, you must close the dialog and refresh. 

# Architecture
- Everything in the domain model is standalone and autonomous amd my intention was to reflect this in the architecture with different modules for Order, Test and in theory Patient could be a module like that too.
- ngrx store was implemented in a Shared module.
