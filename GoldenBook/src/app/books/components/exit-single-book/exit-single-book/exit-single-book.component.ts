import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exit-single-book',
  templateUrl: './exit-single-book.component.html',
  styleUrls: ['./exit-single-book.component.scss'],
})
export class ExitSingleBookComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ExitSingleBookComponent>) {}

  closeYes() {
    this.dialogRef.close(true);
  }

  closeNo() {
    this.dialogRef.close(false);
  }

  ngOnInit(): void {}
}
