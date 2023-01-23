import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordStaffComponent } from './change-password-staff.component';

describe('ChangePasswordStaffComponent', () => {
  let component: ChangePasswordStaffComponent;
  let fixture: ComponentFixture<ChangePasswordStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
