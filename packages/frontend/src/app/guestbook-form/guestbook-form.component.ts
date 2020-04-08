import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GuestbookService, GuestbookPost } from '../guestbook.service';

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

  @Output() submitted = new EventEmitter<GuestbookPost>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.guestbookForm.value);
    this.submitted.emit(this.guestbookForm.value as GuestbookPost);
  }
}
