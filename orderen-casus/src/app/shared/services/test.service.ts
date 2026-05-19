import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TEST_FIXTURES } from 'src/app/shared/fixtures';
import { Test } from 'src/app/shared/models/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private readonly tests: Test[] = TEST_FIXTURES;

  getTests(): Observable<Test[]> {
    return of(this.tests);
  }
}
