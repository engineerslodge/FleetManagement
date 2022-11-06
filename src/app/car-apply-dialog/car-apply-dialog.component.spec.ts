import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarApplyDialogComponent } from './car-apply-dialog.component';

describe('CarApplyDialogComponent', () => {
  let component: CarApplyDialogComponent;
  let fixture: ComponentFixture<CarApplyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarApplyDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarApplyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
