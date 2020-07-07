import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../register/state-matcher.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/global/dialog/dialog.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit {
  userForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  dialog: MatDialogRef<DialogComponent>;
  user: any;

  constructor(
    private _router: Router,
    private _userService: UsersService,
    private _authService: AuthService,
    private _formBuilder: FormBuilder
  ) {
    const isConnected = !!localStorage.getItem('token');
    if (!isConnected) {
        this._router.navigate(['/connexion']);
    }
  }

  /*
   * Initiation of the component
   */
  ngOnInit() {
    this.userForm = this._formBuilder.group(
      {
        email: ['', [Validators.required]],
        username: ['', [Validators.required]],
        password: [''],
        confirmPassword: [''],
      },
      { validator: this.checkPasswords }
    );
    this.refreshData();
  }

  private refreshData(): void {
    this._userService.getCurrentUser().subscribe(
      (user) => {
        this.user = user;

        this.userForm.patchValue({
          email: user.email,
          username: user.username,
        });
      },
      (err) => {
        console.log(
          'An error occured while fetching current user information',
          err
        );
      }
    );
  }

  /*
   * Submit the forms
   */
  onRegister(): void {
    const data = {
      ...this.user,
      email: this.userForm.get('email').value,
      username: this.userForm.get('username').value,
    };
    if (this.userForm.get('password').value) {
      data['password'] = this.userForm.get('password').value;
    }
  }

  /*
   * Custom validator for checking the passwords
   */
  checkPasswords(group: FormGroup) {
    return null;
  }

  /*
   * Get username content in my register.component.html file
   */
  get username() {
    return this.userForm.get('username');
  }

  /*
   * Get email content in my register.component.html file
   */
  get email() {
    return this.userForm.get('email');
  }

  /*
   * Get password content in my register.component.html file
   */
  get password() {
    return this.userForm.get('password');
  }

  /*
   * Get confirmPassword content in my register.component.html file
   */
  //   get confirmPassword() {
  //     return this.userForm.get('confirmPassword');
  //   }

  disconnect(): void {
    this._authService.disconnect();
    this._authService.isConnected.next(false);
  }
}
