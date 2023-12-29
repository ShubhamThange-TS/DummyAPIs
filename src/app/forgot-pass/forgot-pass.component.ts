import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
 
 
@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {
  sendotpForm!: FormGroup;
  successMessage: string | undefined;
 
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }
 
  ngOnInit(): void {
    this.sendotpForm = this.fb.group({
      MobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
     
    });
  }
 
  get mobileNumber() {
    return this.sendotpForm.get('MobileNumber');
  }
 
 
 
  SendOTP() {
    if (this.sendotpForm.valid) {
      const mobileNumber = this.sendotpForm.value.MobileNumber;
      this.http.put(`http://192.168.0.124/BIZHOLIC_USER_REGISTER_AND_LOGIN/Service1.svc/ResetPasswordOTP/${mobileNumber}/{OTP}`, {}).subscribe(
        (response) => {
          console.warn('OTP Send successfully:');
          this.successMessage = 'OTP sent successfully.';
          this.router.navigate(['/verify-otp', { mobileNumber }]);
        },
        (error) => {
          console.error('Error generating OTP:', error);
        }
      );
    } else {
      this.sendotpForm.markAllAsTouched();
    }
  }
}