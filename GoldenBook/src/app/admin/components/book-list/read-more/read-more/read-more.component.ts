import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Book } from 'src/app/model/interfaces/book.model';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
})
export class ReadMoreComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public book: Book,
    private dialogReference: MatDialogRef<ReadMoreComponent>
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogReference.close();
  }
}
