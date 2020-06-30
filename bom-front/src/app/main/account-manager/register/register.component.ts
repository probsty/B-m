import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from './state-matcher.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DialogComponent } from 'src/app/global/dialog/dialog.component';
import {
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  dialog: MatDialogRef<DialogComponent>;

  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _dialog: MatDialog
  ) {}

  /*
   * Initiation of the component
   */
  ngOnInit() {
    this.registerForm = this._formBuilder.group(
      {
        email: ['', [Validators.required]],
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: [''],
      },
      { validator: this.checkPasswords }
    );
  }

  /*
   * Submit the forms
   */
  onRegister(): void {
    const data = {
      email: this.registerForm.get('email').value,
      username: this.registerForm.get('username').value,
      password: this.registerForm.get('password').value,
    };
    this._authService.createUser(data).subscribe(
      (user) => {
        this.dialog = this._dialog.open(DialogComponent, {
          disableClose: true,
          autoFocus: true,
          data: {
            title: 'Information création de compte',
            description:
              'Veuillez confirmer votre email. Pensez à verifier vos spams :)',
          },
        });
        this.dialog.afterClosed().subscribe((isSend) => {
          if (isSend) {
            this._router.navigate(['/']);
          }
        })
      });
  }

  /*
   * Custom validator for checking the passwords
   */
  checkPasswords(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;

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
