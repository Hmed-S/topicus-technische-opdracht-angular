export interface Order {
  id: string;
  patientId: string;
  locationId: string;
  testIds: string[];
  startDateTime: string;
  endDateTime: string;
}
