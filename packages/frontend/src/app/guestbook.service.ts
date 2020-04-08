import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GuestbookPost {
  name: string;
  email: string;
  title: string;
  message: string;
  date?: string;
}

@Injectable({
  providedIn: 'root',
})
export class GuestbookService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<GuestbookPost[]> {
    return this.http.get<GuestbookPost[]>('/api/guestbook');
  }

  writePost(post: GuestbookPost) {
    this.http.post('/api/guestbook', post);
  }
}
