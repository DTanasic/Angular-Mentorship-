import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-safe-filters',
  templateUrl: './safe-filters.component.html',
  styleUrls: ['./safe-filters.component.scss'],
})
export class SafeFiltersComponent {
  constructor(private dialogRef: MatDialogRef<SafeFiltersComponent>) {}

  closeYes() {
    this.dialogRef.close(true);
  }

  closeNo() {
    this.dialogRef.close(false);
  }
}
