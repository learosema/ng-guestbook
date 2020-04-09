import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { GuestbookFormComponent } from './guestbook-form.component';

describe('GuestbookFormComponent', () => {
  let component: GuestbookFormComponent;
  let fixture: ComponentFixture<GuestbookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GuestbookFormComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestbookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
