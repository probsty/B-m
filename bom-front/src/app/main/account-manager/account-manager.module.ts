import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { AuthGoogleComponent } from './auth-google/auth-google.component';
import { AuthFacebookComponent } from './auth-facebook/auth-facebook.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { httpInterceptorProviders } from 'src/app/http-interceptors';

const routes = [
  {
    path: 'connexion',
    component: LoginComponent,
    data: { isRegistration: false },
  },
  {
    path: 'inscription',
    component: RegisterComponent,
    data: { isRegistration: false },
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    AuthGoogleComponent,
    AuthFacebookComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  //   providers: [httpInterceptorProviders],
})
export class AccountManagerModule {}
