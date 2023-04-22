import { style } from '@angular/animations';
import { Categories } from './../../../model/enum/categories.enum';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBookBackground]',
})
export class BookBackgroundDirective {
  @Input() category?: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const categotyName = this.category?.replace('Category:', '');
    switch (categotyName) {
      case 'General':
        this.elementRef.nativeElement.style.backgroundColor = '';
        this.elementRef.nativeElement.style.color = '';
        break;
      case Categories.history:
        this.elementRef.nativeElement.style.backgroundColor = 'white';
        this.elementRef.nativeElement.style.color = '';
        break;
      case Categories.fantasy:
        this.elementRef.nativeElement.style.backgroundColor = 'pink';
        this.elementRef.nativeElement.style.color = 'white';
        break;
      case Categories.literary:
        this.elementRef.nativeElement.style.backgroundColor = 'green';
        this.elementRef.nativeElement.style.color = 'yellow';
        break;
    }
  }
}
