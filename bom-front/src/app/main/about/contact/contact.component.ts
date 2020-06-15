import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  m_contactForm: FormGroup;

  constructor(
    private m_formBuilder: FormBuilder,
    private m_route: ActivatedRoute,
    private m_router: Router
  ) {}

  /*
  * Initiation of the component
   */
  ngOnInit() {
    this.m_contactForm = this.m_formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', Validators.required],
      message: ['', [Validators.required]],
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
    return this.m_contactForm.get('email');
  }

  /*
  * Get password content in my register.component.html file
   */
  get name() {
    return this.m_contactForm.get('name');
  }

  /*
  * Get password content in my register.component.html file
   */
  get message() {
    return this.m_contactForm.get('message');
  }

}

