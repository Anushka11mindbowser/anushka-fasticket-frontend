import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPlaySeatsComponent } from './book-play-seats.component';

describe('BookPlaySeatsComponent', () => {
  let component: BookPlaySeatsComponent;
  let fixture: ComponentFixture<BookPlaySeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPlaySeatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPlaySeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
