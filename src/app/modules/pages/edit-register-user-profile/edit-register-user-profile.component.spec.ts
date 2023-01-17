import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegisterUserProfileComponent } from './edit-register-user-profile.component';

describe('EditRegisterUserProfileComponent', () => {
  let component: EditRegisterUserProfileComponent;
  let fixture: ComponentFixture<EditRegisterUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRegisterUserProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRegisterUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
