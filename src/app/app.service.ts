import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  getCommentaries(page: number): Observable<Comment[]> {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/comments?page=${page}&per_page=10`
    ) as Observable<Comment[]>;
  }
}
