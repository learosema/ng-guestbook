import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GuestbookService } from './guestbook.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GuestbookService, HttpClient],
    })
  );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
