import { TestBed } from '@angular/core/testing';

import { DonorPollService } from './donor-poll.service';

describe('DonorPollService', () => {
  let service: DonorPollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonorPollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
