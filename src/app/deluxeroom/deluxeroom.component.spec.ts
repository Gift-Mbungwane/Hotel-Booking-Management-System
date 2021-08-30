import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeluxeroomComponent } from './deluxeroom.component';

describe('DeluxeroomComponent', () => {
  let component: DeluxeroomComponent;
  let fixture: ComponentFixture<DeluxeroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeluxeroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeluxeroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
