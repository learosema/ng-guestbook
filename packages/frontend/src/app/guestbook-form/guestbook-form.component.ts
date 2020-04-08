import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-guestbook-form',
  templateUrl: './guestbook-form.component.html',
  styleUrls: ['./guestbook-form.component.less'],
})
export class GuestbookFormComponent implements OnInit {
  guestbookForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    title: new FormControl(''),
    message: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}
}
