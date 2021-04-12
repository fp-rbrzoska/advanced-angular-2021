import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers = new HttpHeaders();
    headers.append('testHeaderToken', '21321oer23jrij3298jrf32jrfoj23hf9230fio23r');
    const newReq = request.clone({
      headers: request.headers.set('testHeaderToken', '21321oer23jrij3298jrf32jrfoj23hf9230fio23r')
    })
    return next.handle(newReq);
  }
}
