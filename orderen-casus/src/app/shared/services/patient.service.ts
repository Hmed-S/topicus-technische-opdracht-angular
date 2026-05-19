import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PATIENT_FIXTURES } from 'src/app/shared/fixtures';
import { Patient } from 'src/app/shared/models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private readonly patients: Patient[] = PATIENT_FIXTURES;

  getPatients(): Observable<Patient[]> {
    return of(this.patients);
  }
}
