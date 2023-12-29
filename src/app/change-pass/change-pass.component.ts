import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent {
  CreateNewPassword: string = '';
  ConfirmCreateNewPassword: string = '';
  updateMessage: string = '';
  messageColorClass: string='';

  updatePassword() {
    if (this.CreateNewPassword === this.ConfirmCreateNewPassword) {
      this.updateMessage = 'Password Updated Successfully!';
      this.messageColorClass = 'success-message';
    } else {
      this.updateMessage = 'Passwords do not matched. Please try again.';
      this.messageColorClass = 'error-message';
    }
  }
}
