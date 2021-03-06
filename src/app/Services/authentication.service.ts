import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../Models/HttpResponses/authentication.response';
import { User } from '../Models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import axios, { Axios } from 'axios';


@Injectable()
export class AuthenticationService {
    // Change 4 - Subject for dealing with invalid credentials
    private isAuthenticationFailedSubject: Subject<boolean>;
    // Change 6 - Declare Observable
    invalidCredentialsObservable$: Observable<boolean>;

    // Change no 1 - Router Service injected
    constructor(private router: Router, private httpClient: HttpClient) {
      this.isAuthenticationFailedSubject = new Subject<boolean>();
      // Change 7 - Get Observable from Subject
      this.invalidCredentialsObservable$ = this.isAuthenticationFailedSubject.asObservable();
    }


  // Change no 2 - Return type is void
  authenticate(user: User): void {

    axios({
      method: 'post',
      url:'https://vra8.lab.local/csp/gateway/am/api/login?access_token',
      data: {
        username: user.UserName,
        password: user.Password
      },
      headers: {'Content-Type': 'application/json'},
    }) .catch(function (error) {
        console.log(error.toJSON());
        //this.isAuthenticationFailedSubject.next(true);
    }).then(function (response) {
      // handle success
      console.log(response);
    })

/*
    this.httpClient
      .post<AuthenticationResponse>('http://localhost:4000/signin', user)
      .subscribe((response: { token: string }) => {
        if (response.token !== undefined) {
          localStorage.token = response.token;
          this.router.navigate(['deployment']);
        }else{
          // Change 5 - Notify subscriber that credentials are invalid
          this.isAuthenticationFailedSubject.next(true);
        }
      });
  */
  }
}
