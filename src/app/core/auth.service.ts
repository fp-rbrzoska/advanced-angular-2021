import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authSubj = new BehaviorSubject(false);

  isLoggedIn$ = this.authSubj.asObservable();

  constructor() { }

  login() {
    this.authSubj.next(true);
  }

  logout() {
    this.authSubj.next(false);
  }
}
