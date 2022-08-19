import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPlayBookingComponent } from './confirm-play-booking.component';

describe('ConfirmPlayBookingComponent', () => {
  let component: ConfirmPlayBookingComponent;
  let fixture: ComponentFixture<ConfirmPlayBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmPlayBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPlayBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
