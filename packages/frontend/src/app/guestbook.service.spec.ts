import { TestBed } from '@angular/core/testing';

import { GuestbookService } from './guestbook.service';

describe('GuestbookService', () => {
  let service: GuestbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
