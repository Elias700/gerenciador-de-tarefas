import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentShiftsComponent } from './recent-shifts.component';

describe('RecentShiftsComponent', () => {
  let component: RecentShiftsComponent;
  let fixture: ComponentFixture<RecentShiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentShiftsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentShiftsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
