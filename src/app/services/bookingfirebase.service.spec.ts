import { TestBed } from '@angular/core/testing';

import { BookingfirebaseService } from './bookingfirebase.service';

describe('BookingfirebaseService', () => {
  let service: BookingfirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingfirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
