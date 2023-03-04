import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralPartComponent } from './central-part.component';

describe('CentralPartComponent', () => {
  let component: CentralPartComponent;
  let fixture: ComponentFixture<CentralPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
