import { Component, OnInit, Input } from '@angular/core';
import { GuestbookPost } from '../guestbook.service';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.less'],
})
export class PostingComponent implements OnInit {
  @Input() post: GuestbookPost = {
    name: '',
    email: '',
    title: '',
    message: '',
    date: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
