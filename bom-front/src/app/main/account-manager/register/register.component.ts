import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from './state-matcher.component';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public matcher = new MyErrorStateMatcher();

  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  /*
   * Initiation of the component
   */
  ngOnInit() {
    this.registerForm = this._formBuilder.group(
      {
        email: ['', [Validators.required]],
        // Rajouter le validator
        username: [''],
        password: ['', [Validators.required]],
        confirmPassword: [''],
      },
      { validator: this.checkPasswords }
    );
  }

  /*
   * Submit the forms
   */
  onSubmit(): void {
    console.log('On submit');
  }

  onRegister(): void {
    console.log('On register');

    const data = {
      email: this.registerForm.get('email').value,
      username: this.registerForm.get('username').value,
      password: this.registerForm.get('password').value,
    };

    console.log(data);
    this._authService.createUser(data).subscribe(
      (user) => {
        if (user) {
          console.log('User ', user);
          this._router.navigate(['/']).then(() => {
            // TODO: Need to find another solution to update navigatio
            location.reload();
          });
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
   * Custom validator for checking the passwords
   */
  checkPasswords(group: FormGroup) {
    let password = group.get('password').value;
    let confirmPassword = group.get('confirmPassword').value;

    return password === confirmPassword ? null : { notSame: true };
  }

  /*
  * Get username content in my register.component.html file
   */
  get username() {
    return this.registerForm.get('username');
  }

  /*
  * Get email content in my register.component.html file
   */
  get email() {
    return this.registerForm.get('email');
  }

  /*
  * Get password content in my register.component.html file
   */
  get password() {
    return this.registerForm.get('password');
  }

  /*
  * Get confirmPassword content in my register.component.html file
   */
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
}
