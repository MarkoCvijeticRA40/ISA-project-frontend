import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRegisterUserProfileComponent } from './show-register-user-profile.component';

describe('ShowRegisterUserProfileComponent', () => {
  let component: ShowRegisterUserProfileComponent;
  let fixture: ComponentFixture<ShowRegisterUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRegisterUserProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRegisterUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
