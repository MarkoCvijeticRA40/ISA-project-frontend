import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSystemAdminComponent } from './register-system-admin.component';

describe('RegisterSystemAdminComponent', () => {
  let component: RegisterSystemAdminComponent;
  let fixture: ComponentFixture<RegisterSystemAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSystemAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSystemAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
