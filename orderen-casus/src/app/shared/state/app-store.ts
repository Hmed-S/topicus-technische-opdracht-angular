import { TestStore } from "./test/test-reducer";
import { LocationStore } from "./location/location-reducer";
import { PatientStore } from "./patient/patient-reducer";
import { OrderStore } from "./order/order-reducer";

export interface Appstore{
    test: TestStore,
    location: LocationStore,
    patient: PatientStore, 
    orders: OrderStore
}

