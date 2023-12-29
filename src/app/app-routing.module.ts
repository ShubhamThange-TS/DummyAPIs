import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SendOtpComponent } from './send-otp/send-otp.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'verify-otp',
    component: VerifyOtpComponent
  },
  {
    path: 'change-pass',
    component: ChangePassComponent
  },
  {
    path: 'user-auth',
    component: UserAuthComponent
  },
  {
    path: 'seller-auth',
    component: SellerAuthComponent
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user-home',
    component: UserHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'seller-add-product',
    component: SellerAddProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'seller-update-product/:id',
    component: SellerUpdateProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'forgot-pass',
    component: ForgotPassComponent
  },
  {
    path: 'send-otp',
    component: SendOtpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
