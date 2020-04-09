import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GuestbookService } from './guestbook.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PostingComponent } from './posting/posting.component';
import { GuestbookFormComponent } from './guestbook-form/guestbook-form.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GuestbookService, HttpClient],
    })
  );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [AppComponent, PostingComponent, GuestbookFormComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
