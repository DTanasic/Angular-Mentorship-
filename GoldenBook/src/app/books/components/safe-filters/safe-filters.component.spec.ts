import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeFiltersComponent } from './safe-filters.component';

describe('SafeFiltersComponent', () => {
  let component: SafeFiltersComponent;
  let fixture: ComponentFixture<SafeFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafeFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafeFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
