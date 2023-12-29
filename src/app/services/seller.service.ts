import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { SignUp, Login } from '../data-types';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false)

  constructor(private http: HttpClient, private router: Router) { }
  sellerSignUp(data: SignUp){
    this.http.post<any>('http://192.168.0.124/BIZHOLIC_NEW_SELLER_REGISTER/Service1.svc/AddNewSeller', data, { withCredentials: true })
      .subscribe(response => {

        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(response.body))
        this.router.navigate(['seller-home']);
      });
  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  sellerLogin(data: Login) {
    console.warn(data)
    this.http.post<any>('http://192.168.0.124/BIZHOLIC_SELLER_LOGIN/Service1.svc/SellerLogin', data, { withCredentials: true }
    ).subscribe((result: any) => {
      console.warn(result)
      if (result) {
        console.warn("User Logged In")
        localStorage.setItem('seller', JSON.stringify(result))
        this.router.navigate(['seller-home']);
      } else {
        console.warn("User Login Failed");
        this.isLoginError.emit(true)
      }
    });
  }
}
