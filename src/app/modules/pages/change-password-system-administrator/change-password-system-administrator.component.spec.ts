import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordSystemAdministratorComponent } from './change-password-system-administrator.component';

describe('ChangePasswordSystemAdministratorComponent', () => {
  let component: ChangePasswordSystemAdministratorComponent;
  let fixture: ComponentFixture<ChangePasswordSystemAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordSystemAdministratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordSystemAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
