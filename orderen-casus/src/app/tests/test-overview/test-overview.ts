import { Component, Input } from '@angular/core';
import { Test } from 'src/app/shared/models/test';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-test-overview',
  imports: [MatTableModule],
  templateUrl: './test-overview.html',
  styleUrl: './test-overview.scss',
})
export class TestOverview {
  _tests: Test[] | undefined;
  displayedColumns: string[] = ['code', 'name', 'duration'];

  @Input()
  public set tests(tests: Test[]){
    this._tests = tests;
  }

}
