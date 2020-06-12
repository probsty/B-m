import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent} from "./register";
import { LoginComponent } from "./login";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes = [
    {
      path: 'connexion',
      component: LoginComponent,
      data: { isRegistration: false }
    },
    {
        path: 'inscription',
        component: RegisterComponent,
        data: { isRegistration: true }
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
  ];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountManagerModule { }
