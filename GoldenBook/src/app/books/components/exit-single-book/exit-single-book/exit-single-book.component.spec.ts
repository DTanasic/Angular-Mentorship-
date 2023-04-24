import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitSingleBookComponent } from './exit-single-book.component';

describe('ExitSingleBookComponent', () => {
  let component: ExitSingleBookComponent;
  let fixture: ComponentFixture<ExitSingleBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitSingleBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitSingleBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
