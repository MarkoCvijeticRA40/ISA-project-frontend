import { TestBed } from '@angular/core/testing';

import { PerformedAppointmentService } from './performed-appointment.service';

describe('PerformedAppointmentService', () => {
  let service: PerformedAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerformedAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
