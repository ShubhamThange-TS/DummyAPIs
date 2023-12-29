import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Login } from '../data-types';



@Injectable({
  providedIn: 'root'
})
export class OtpService {

  private apiUrl = 'http://192.168.0.124/BIZHOLIC_USER_REGISTER_AND_LOGIN/Service1.svc';

  constructor(private http: HttpClient, private router: Router) { }

  verifyOtp(enteredOTP: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/VerifyOTP/${enteredOTP}`);
  }
  resendOtp(loginData: Login): Observable<any> {
    const requestData = { MobileNumber: loginData.MobileNumber };
    return this.http.put(`${this.apiUrl}/ResendOTP/9552561936`, requestData);
  }
}

