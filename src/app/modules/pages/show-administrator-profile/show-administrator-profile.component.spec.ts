import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAdministratorProfileComponent } from './show-administrator-profile.component';

describe('ShowAdministratorProfileComponent', () => {
  let component: ShowAdministratorProfileComponent;
  let fixture: ComponentFixture<ShowAdministratorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAdministratorProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAdministratorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
