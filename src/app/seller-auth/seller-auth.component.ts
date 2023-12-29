import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp, Login } from '../data-types'
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;
  authError: string = '';
  isRegistrationSuccessful = false;

  constructor(private seller: SellerService, private router: Router) { }

  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  signUp(data: SignUp): void {
    try {
      this.seller.sellerSignUp(data);
      this.isRegistrationSuccessful = true;
    } catch (error) {
      console.error('Error during sign-up:', error);
    }
    setTimeout(() => {
      this.isRegistrationSuccessful
    }, 3000);
    
  }

  login(data: Login): void {
    this.authError = "";
    // console.warn(data);
    this.seller.sellerLogin(data);
    this.seller.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = "Mobile Number or Password is not correct.";
      }
    })

  }

  openLogin() {
    this.showLogin = true
  }

  openSignUp() {
    this.showLogin = false
  }
}
