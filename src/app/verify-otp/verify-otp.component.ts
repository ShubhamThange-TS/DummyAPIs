
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { OtpService } from '../services/otp.service';
import { Login } from '../data-types';
@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent {
  MobileNumber: string;
  verifyOtpForm!: FormGroup;
  otpResentSuccessfully: boolean = false;
  successMessage: string | undefined;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private otpService: OtpService,
  ) {
    this.verifyOtpForm = this.formBuilder.group({
      EnteredOTP: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    });
    this.MobileNumber = this.route.snapshot.paramMap.get('MobileNumber')!;
  }
  ngOnInit() {
    this.MobileNumber = this.route.snapshot.paramMap.get('MobileNumber')!;
  }
  verifyOtp() {
    if (this.verifyOtpForm.valid) {
      const enteredOTP = this.verifyOtpForm.get('EnteredOTP')?.value;
      this.otpService.verifyOtp(enteredOTP).subscribe(
        () => {
          console.warn('OTP Verify successfully:');
          this.successMessage = 'OTP Verify successfully.';
          this.router.navigate(['/user-home', { enteredOTP }]);
        },
        (error) => {
          console.error('Error generating OTP:', error);
        }
      );
    } else {
      this.verifyOtpForm.markAllAsTouched();
    }
  }
  resendOtp() {
    const loginData: Login = {
      MobileNumber: this.MobileNumber
    };
    this.otpService.resendOtp(loginData).subscribe(
      () => {
        console.warn('OTP Resent successfully:');
        this.otpResentSuccessfully = true;
      },
      (error) => {
        console.error('Error resending OTP:', error);
      }
    );
  }
}
