import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingShiftsComponent } from './upcoming-shifts.component';

describe('UpcomingShiftsComponent', () => {
  let component: UpcomingShiftsComponent;
  let fixture: ComponentFixture<UpcomingShiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingShiftsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpcomingShiftsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
