import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarApplicationComponent } from './car-application.component';

describe('CarApplicationComponent', () => {
  let component: CarApplicationComponent;
  let fixture: ComponentFixture<CarApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
