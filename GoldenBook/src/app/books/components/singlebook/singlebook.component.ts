import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.scss'],
})
export class SinglebookComponent implements OnInit {
  constructor(private activatedRouter: ActivatedRoute) {}
  ngOnInit(): void {
    let bookId = this.activatedRouter.snapshot.paramMap.get('bookId');
    console.log(bookId);
  }
}
