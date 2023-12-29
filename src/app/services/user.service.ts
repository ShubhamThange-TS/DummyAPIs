import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { SignUp, Login } from '../data-types';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false)

  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: SignUp){
    this.http.post<any>('http://192.168.0.124/BIZHOLIC_USER_REGISTER_AND_LOGIN/Service1.svc/AddNewUser', data, { withCredentials: true })
      .subscribe(response => {

        this.isUserLoggedIn.next(true);
        localStorage.setItem('user', JSON.stringify(response.body))
        this.router.navigate(['user-home']);
      });
  }

  reloadUser() {
    if (localStorage.getItem('user')) {
      this.isUserLoggedIn.next(true);
      this.router.navigate(['user-auth']);
    }
  }

  userLogin(data: Login) {
    console.warn(data)
    this.http.post<any>('http://192.168.0.124/BIZHOLIC_USER_REGISTER_AND_LOGIN/Service1.svc/AddUser', data, { withCredentials: true }
    ).subscribe((result: any) => {
      console.warn(result)
      if (result) {
        console.warn("User Logged In")
        localStorage.setItem('user', JSON.stringify(result))
        this.router.navigate(['verify-otp']);
      } else {
        console.warn("User Login Failed");
        this.isLoginError.emit(true)
      }
    });
  }
}
