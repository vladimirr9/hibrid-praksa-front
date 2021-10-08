import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailedComponent } from './book-detailed.component';

describe('BookDetailedComponent', () => {
  let component: BookDetailedComponent;
  let fixture: ComponentFixture<BookDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
