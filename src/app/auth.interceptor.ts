import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authReq = request.clone({
            // headers: request.headers.set('Authorization', token),
            url: environment.baseUrl + request.url
        });
        return next.handle(authReq);
        // if (localStorage.getItem('H2ESInstituteUser')) {

        //     // console.log('Sending request with new header now ...');
        //     // send the newly created request
        // }
        // return next.handle(request);

    }
}
