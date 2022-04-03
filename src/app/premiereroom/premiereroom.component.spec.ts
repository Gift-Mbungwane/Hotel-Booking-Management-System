import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiereroomComponent } from './premiereroom.component';

describe('PremiereroomComponent', () => {
  let component: PremiereroomComponent;
  let fixture: ComponentFixture<PremiereroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiereroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiereroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
