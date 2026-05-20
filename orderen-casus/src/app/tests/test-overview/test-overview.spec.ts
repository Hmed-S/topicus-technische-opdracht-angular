import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOverview } from './test-overview';

describe('TestOverview', () => {
  let component: TestOverview;
  let fixture: ComponentFixture<TestOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(TestOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
