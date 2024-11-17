import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.scss'],
})
export class LoginAuthComponent {
  loginForm!: FormGroup;
  passwordVisible = false;
  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private router: Router
  ) {
    this.loginForm = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.fb.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  submitForm() {
    if (this.loginForm.valid) {
      const user = btoa(this.loginForm.value.username);
      const password = btoa(this.loginForm.value.password);
      console.log(user, password, this.loginForm.value);
      console.log(this.loginForm.value);

      this.service
        .loginToCova(
          this.loginForm.value.username,
          this.loginForm.value.password
        )
        .subscribe((res) => {
          console.log(res);
          if (res) {
            sessionStorage.setItem('user', JSON.stringify(res));
            this.router.navigate(['/users']);
          }
        });

      // this.service
      //   .login({ email: user, password: password })
      //   .subscribe((resp) => {
      //     if (resp.status === 200) {
      //       console.log(resp.headers.get('X-Access-Token'));
      //       console.log(resp.headers.get('X-Refresh-Token'));
      //       console.log(resp);
      //       const accessToken = resp.headers.get('X-Access-Token');
      //       const refreshToken = resp.headers.get('X-Refresh-Token');
      //       sessionStorage.setItem('access', accessToken ? accessToken : '');
      //       sessionStorage.setItem('refresh', refreshToken ? refreshToken : '');
      //       this.router.navigate(['/users'])
      //     }
      //   });
    }
  }
}
