import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TwittwerService {

  constructor(private http: HttpClient) { }

  loadPosts() {
    return this.http.get('http://localhost:3000/posts');
  }
}
