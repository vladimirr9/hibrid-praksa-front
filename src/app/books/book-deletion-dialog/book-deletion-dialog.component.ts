import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthorDialogComponent } from 'src/app/authors/author-dialog/author-dialog.component';

@Component({
  selector: 'app-book-deletion-dialog',
  templateUrl: './book-deletion-dialog.component.html',
  styleUrls: ['./book-deletion-dialog.component.scss']
})
export class BookDeletionDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AuthorDialogComponent>) { }

  ngOnInit(): void {
  }

  confirm() {
    this.dialogRef.close(true);
  }
  close() {
    this.dialogRef.close(false);
  }
}
