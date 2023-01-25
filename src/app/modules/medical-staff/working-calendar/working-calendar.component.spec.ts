import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingCalendarComponent } from './working-calendar.component';

describe('WorkingCalendarComponent', () => {
  let component: WorkingCalendarComponent;
  let fixture: ComponentFixture<WorkingCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
