import { TestBed } from '@angular/core/testing';

import { GuestbookService } from './guestbook.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GuestbookService', () => {
  let service: GuestbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(GuestbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
