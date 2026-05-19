import { TestStore } from "./test/test-reducer";
import { LocationStore } from "./location/location-reducer";
import { PatientStore } from "./patient/patient-reducer";
import { OrderStore } from "./order/order-reducer";

export interface Appstore{
    tests: TestStore,
    locations: LocationStore,
    patients: PatientStore, 
    orders: OrderStore
}

