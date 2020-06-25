import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {}

  /*
   * Initiation of the component
   */
  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }

  /*
   * Submit the forms
   */
  onLogin(): void {
    this._authService
      .login(
        this.loginForm.get('email').value,
        this.loginForm.get('password').value
      )
      .subscribe(
        (user) => {
          if (user) {
            this._router.navigate(['/']);

          } else {
            console.error('An error occured while connecting to server');
          }
        },
        (err) => {
          console.log('error', err);
        }
      );
  }

  /*
   * Get email content in my register.component.html file
   */
  get email() {
    return this.loginForm.get('email');
  }

  /*
   * Get password content in my register.component.html file
   */
  get password() {
    return this.loginForm.get('password');
  }
}
