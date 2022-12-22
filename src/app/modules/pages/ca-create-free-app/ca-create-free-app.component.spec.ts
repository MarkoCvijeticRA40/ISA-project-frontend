import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaCreateFreeAppComponent } from './ca-create-free-app.component';

describe('CaCreateFreeAppComponent', () => {
  let component: CaCreateFreeAppComponent;
  let fixture: ComponentFixture<CaCreateFreeAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaCreateFreeAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaCreateFreeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
