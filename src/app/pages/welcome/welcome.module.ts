import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterComponent } from './register/register.component';
import { LoginService } from './service/login.service';
import { LoginAuthComponent } from './login-auth/login-auth.component';
import { RegisterAuthComponent } from './register-auth/register-auth.component';
import { ForgotPasswordAuthComponent } from './forgot-password-auth/forgot-password-auth.component';
import { ResetPasswordAuthComponent } from './reset-password-auth/reset-password-auth.component';


@NgModule({
  imports: [WelcomeRoutingModule, IconsProviderModule, NzButtonModule],
  declarations: [WelcomeComponent, LoginComponent, ForgotPasswordComponent, 
                 ResetPasswordComponent, RegisterComponent, LoginAuthComponent, RegisterAuthComponent, ForgotPasswordAuthComponent, ResetPasswordAuthComponent],
  exports: [WelcomeComponent, LoginComponent],
  
  providers:[LoginService]
})
export class WelcomeModule { }
