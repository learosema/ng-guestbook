import { Component, OnInit } from '@angular/core';
import { GuestbookService, GuestbookPost } from './guestbook.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'frontend';
  posts: Observable<GuestbookPost[]> = this.guestbook.getPosts();

  constructor(private guestbook: GuestbookService) {}
}
