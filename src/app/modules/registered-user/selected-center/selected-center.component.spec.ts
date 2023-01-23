import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCenterComponent } from './selected-center.component';

describe('SelectedCenterComponent', () => {
  let component: SelectedCenterComponent;
  let fixture: ComponentFixture<SelectedCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
