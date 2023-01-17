import { TestBed } from '@angular/core/testing';

import { MedicalstaffService } from './medicalstaff.service';

describe('MedicalstaffService', () => {
  let service: MedicalstaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalstaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
