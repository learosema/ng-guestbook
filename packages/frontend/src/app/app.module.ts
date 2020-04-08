import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GuestbookFormComponent } from './guestbook-form/guestbook-form.component';
import { PostingComponent } from './posting/posting.component';

@NgModule({
  declarations: [AppComponent, GuestbookFormComponent, PostingComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
