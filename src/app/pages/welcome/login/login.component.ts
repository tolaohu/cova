import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService],
})
export class LoginComponent {
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
      this.service
        .login({ email: user, password: password })
        .subscribe((resp) => {
          if (resp.status === 200) {
            console.log(resp.headers.get('X-Access-Token'));
            console.log(resp.headers.get('X-Refresh-Token'));
            console.log(resp);
            const accessToken = resp.headers.get('X-Access-Token');
            const refreshToken = resp.headers.get('X-Refresh-Token');
            sessionStorage.setItem('access', accessToken ? accessToken : '');
            sessionStorage.setItem('refresh', refreshToken ? refreshToken : '');
            this.router.navigate(['/users'])
          }
        });
    }
  }
}
