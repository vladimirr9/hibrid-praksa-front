import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDeletionDialogComponent } from './book-deletion-dialog.component';

describe('BookDeletionDialogComponent', () => {
  let component: BookDeletionDialogComponent;
  let fixture: ComponentFixture<BookDeletionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDeletionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDeletionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
