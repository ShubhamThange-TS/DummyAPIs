import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwilioService {
  private accountSid ='AC4fbaefa891fabc8b9b3d2af3c8bfa68a';
  private authToken='b57ca97667dca9d16bcbed73d2be27c1';
  private twilioApiUrl = `https://api.twilio.com/2010-04-01/Accounts/${this.accountSid}/Messages.json`;
  private twilioAuthHeader: string;

  constructor(private http: HttpClient) {
    const authToken = btoa(`${this.accountSid}:${this.authToken}`);
    this.twilioAuthHeader = `Basic ${authToken}`;
  }

  sendOTP(mobileNumber: string): Observable<any> {
    const body = {
      To: mobileNumber,
      From: '+12057404738',
      Body: 'Your OTP code is: 123456'
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.twilioAuthHeader
    });

    return this.http.post(this.twilioApiUrl, this.urlEncode(body), { headers });
  }

  private urlEncode(obj: any): string {
    return Object.keys(obj).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])).join('&');
  }
}
