import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp, Login } from '../data-types';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  showLogin = false;
  authError: string = '';
  isRegistrationSuccessful = false;
  MobileNumber = undefined;
  constructor(private user: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user.reloadUser();
  }

  signUp(data: SignUp): void {
    try {
      this.user.userSignUp(data);
      this.isRegistrationSuccessful = true;
    } catch (error) {
      console.error('Error during sign-up:', error);
    }
    setTimeout(() => {
      this.isRegistrationSuccessful = false;
    }, 3000);
  }

  Login(data: Login): void {
    this.authError = '';
    this.user.userLogin(data) === this.MobileNumber;
    this.user.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = 'Mobile Number or Password is not correct.';
      } else {
        this.authError = '';
      }

      setTimeout(() => {
        this.isRegistrationSuccessful = false;
      }, 3000);
    });
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignUp() {
    this.showLogin = false;
  }
}
