import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAvailableAppointmentComponent } from './create-available-appointment.component';

describe('CreateAvailableAppointmentComponent', () => {
  let component: CreateAvailableAppointmentComponent;
  let fixture: ComponentFixture<CreateAvailableAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAvailableAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAvailableAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
