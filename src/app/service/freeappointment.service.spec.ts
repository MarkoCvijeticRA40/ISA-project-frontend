import { TestBed } from '@angular/core/testing';

import { FreeappointmentService } from './freeappointment.service';

describe('FreeappointmentService', () => {
  let service: FreeappointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeappointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
