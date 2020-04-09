import { Component, OnInit, OnDestroy } from '@angular/core';
import { GuestbookService, GuestbookPost } from './guestbook.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnDestroy {
  title = 'frontend';
  posts: Observable<GuestbookPost[]> = this.guestbook.getPosts();
  private subscription: Subscription = new Subscription();

  constructor(private guestbook: GuestbookService) {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submitted(post: GuestbookPost) {
    this.subscription.add(
      this.guestbook.writePost(post).subscribe((result) => {
        console.log(result);
        this.posts = this.guestbook.getPosts();
      })
    );
  }
}
