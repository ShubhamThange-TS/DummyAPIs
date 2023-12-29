import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SellerService } from './services/seller.service';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserService } from './services/user.service';
import { OtpService } from './services/otp.service';
import { ProductService } from './services/product.service';
import { SendOtpComponent } from './send-otp/send-otp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
    SellerUpdateProductComponent,
    ForgotPassComponent,
    VerifyOtpComponent,
    ChangePassComponent,
    UserAuthComponent,
    UserHomeComponent,
    SendOtpComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [SellerService,UserService,OtpService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
