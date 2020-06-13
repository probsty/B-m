import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MyErrorStateMatcher} from "./state-matcher.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  public m_registerForm: FormGroup;
  public m_matcher = new MyErrorStateMatcher();

  constructor(
    private m_formBuilder: FormBuilder,
    private m_route: ActivatedRoute,
    private m_router: Router
  ) {}

  /*
  * Initiation of the component
   */
  ngOnInit() {
    this.m_registerForm = this.m_formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['']
    }, {validator: this.checkPasswords });
  }

  /*
  * Submit the forms
   */
  onSubmit(): void {
    console.log('On submit');
  }

  /*
  * Custom validator for checking the passwords
   */
  checkPasswords(group: FormGroup) {
    let password = group.get('password').value;
    let confirmPassword = group.get('confirmPassword').value;

    return password === confirmPassword ? null : { notSame: true }
  }

  /*
  * Get email content in my register.component.html file
   */
  get email() {
    return this.m_registerForm.get('email');
  }

  /*
  * Get password content in my register.component.html file
   */
  get password() {
    return this.m_registerForm.get('password');
  }

  /*
  * Get confirmPassword content in my register.component.html file
   */
  get confirmPassword() {
    return this.m_registerForm.get('confirmPassword');
  }
}
