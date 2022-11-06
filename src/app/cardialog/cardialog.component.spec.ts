import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardialogComponent } from './cardialog.component';

describe('CardialogComponent', () => {
  let component: CardialogComponent;
  let fixture: ComponentFixture<CardialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
