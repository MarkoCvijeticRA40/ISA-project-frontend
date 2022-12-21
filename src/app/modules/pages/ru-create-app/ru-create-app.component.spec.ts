import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuCreateAppComponent } from './ru-create-app.component';

describe('RuCreateAppComponent', () => {
  let component: RuCreateAppComponent;
  let fixture: ComponentFixture<RuCreateAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuCreateAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuCreateAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
