import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorPollComponent } from './donor-poll.component';

describe('DonorPollComponent', () => {
  let component: DonorPollComponent;
  let fixture: ComponentFixture<DonorPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorPollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
