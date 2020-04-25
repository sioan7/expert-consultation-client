import { HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from '@app/core';

export class AuthenticatedHttpInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HttpEventType.Response>> {

    return next.handle(req).pipe(
        tap(
            (event: HttpEvent<any>) => {
            },
            (err: any) => {
              if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                  this.authService.hasExpired.next(true);
                }
              }
              console.log(err);
            }));
  }
}
