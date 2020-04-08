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

export interface GuestbookPostResult {
  ok: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class GuestbookService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<GuestbookPost[]> {
    return this.http.get<GuestbookPost[]>('/api/guestbook');
  }

  writePost(post: GuestbookPost): Observable<object> {
    return this.http.post('/api/guestbook', post);
  }
}
