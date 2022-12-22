import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSystemAdministratorComponent } from './register-system-administrator.component';

describe('RegisterSystemAdministratorComponent', () => {
  let component: RegisterSystemAdministratorComponent;
  let fixture: ComponentFixture<RegisterSystemAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSystemAdministratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSystemAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
