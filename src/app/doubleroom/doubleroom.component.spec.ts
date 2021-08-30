import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleroomComponent } from './doubleroom.component';

describe('DoubleroomComponent', () => {
  let component: DoubleroomComponent;
  let fixture: ComponentFixture<DoubleroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
