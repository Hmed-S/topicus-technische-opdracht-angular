import { Test } from 'src/app/shared/models/test';

export const TEST_FIXTURES: Test[] = [
  {
    id: 'T001',
    name: 'Complete Blood Count',
    code: 'CBC',
    durationMinutes: 30
  },
  {
    id: 'T002',
    name: 'Comprehensive Metabolic Panel',
    code: 'CMP',
    durationMinutes: 45
  },
  {
    id: 'T003',
    name: 'Lipid Panel',
    code: 'LDL',
    durationMinutes: 30
  },
  {
    id: 'T004',
    name: 'Thyroid Function Test',
    code: 'TSH',
    durationMinutes: 40
  },
  {
    id: 'T005',
    name: 'Urinalysis',
    code: 'UA',
    durationMinutes: 25
  }
];
