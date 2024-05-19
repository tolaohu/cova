import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterComponent } from './register/register.component';
import { LoginAuthComponent } from './login-auth/login-auth.component';
import { RegisterAuthComponent } from './register-auth/register-auth.component';
import { ForgotPasswordAuthComponent } from './forgot-password-auth/forgot-password-auth.component';
import { ResetPasswordAuthComponent } from './reset-password-auth/reset-password-auth.component';

// const routes: Routes = [
  
//   { path: '', pathMatch: 'full', redirectTo: '/login' },
//   { path: 'login', component: LoginComponent },
// ];

const routes: Routes = [
  { path: '', component: WelcomeComponent,
  children: [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
    // {
    //   path: 'login',
    //   component: LoginComponent,
    // },

    {
      path: 'login',
      component: LoginAuthComponent,
    },
    // {
    //   path: 'forgot-password',
    //   component: ForgotPasswordComponent,
    // },
    {
      path: 'forgot-password',
      component: ForgotPasswordAuthComponent,
    },
    // {
    //   path: 'reset-password',
    //   component: ResetPasswordComponent,
    // },
    {
      path: 'reset-password',
      component: ResetPasswordAuthComponent,
    },
    // {
    //   path: 'register',
    //   component: RegisterComponent,
    // },

    {
      path: 'register',
      component: RegisterAuthComponent,
    },
    
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
