import { Component } from '@angular/core';
import { TwilioService } from '../services/twilio.service';
@Component({
  selector: 'app-send-otp',
  templateUrl: './send-otp.component.html',
  styleUrls: ['./send-otp.component.css']
})
export class SendOtpComponent {
  constructor(private twilioService: TwilioService) {}

  sendOTP(mobileNumber: string): void {
    this.twilioService.sendOTP(mobileNumber)
      .subscribe(response => {
        console.log('OTP sent successfully:', response);
        // Handle success, e.g., show a success message to the user
      }, error => {
        console.error('Error sending OTP:', error);
        // Handle error, e.g., show an error message to the user
      });
  }
}
