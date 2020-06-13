import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  m_loginForm: FormGroup;

  constructor(
    private m_formBuilder: FormBuilder,
    private m_route: ActivatedRoute,
    private m_router: Router
  ) {}

  /*
  * Initiation of the component
   */
  ngOnInit() {
    this.m_loginForm = this.m_formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }

  /*
  * Submit the forms
   */
  onSubmit(): void {
    console.log('On submit');
  }

  /*
  * Get email content in my register.component.html file
   */
  get email() {
    return this.m_loginForm.get('email');
  }

  /*
  * Get password content in my register.component.html file
   */
  get password() {
    return this.m_loginForm.get('password');
  }

}
