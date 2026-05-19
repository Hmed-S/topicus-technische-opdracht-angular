import { Order } from 'src/app/shared/models/order';

export const ORDER_FIXTURES: Order[] = [
  {
    id: 'O001',
    patientId: 'P001',
    locationId: 'L001',
    testIds: ['T001'],
    startDateTime: '2026-05-18T09:00:00',
    endDateTime: '2026-05-18T09:30:00'
  },
  {
    id: 'O002',
    patientId: 'P002',
    locationId: 'L002',
    testIds: ['T002'],
    startDateTime: '2026-05-18T10:00:00',
    endDateTime: '2026-05-18T10:45:00'
  },
  {
    id: 'O003',
    patientId: 'P003',
    locationId: 'L003',
    testIds: ['T003'],
    startDateTime: '2026-05-19T11:00:00',
    endDateTime: '2026-05-19T11:30:00'
  },
  {
    id: 'O004',
    patientId: 'P004',
    locationId: 'L004',
    testIds: ['T004'],
    startDateTime: '2026-05-19T13:00:00',
    endDateTime: '2026-05-19T13:40:00'
  },
  {
    id: 'O005',
    patientId: 'P005',
    locationId: 'L005',
    testIds: ['T005'],
    startDateTime: '2026-05-20T14:00:00',
    endDateTime: '2026-05-20T14:30:00'
  }
];
